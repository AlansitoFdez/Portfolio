"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export type PillNavItem = {
  label: string
  href: string
  ariaLabel?: string
}

export interface PillNavProps {
  logo: string
  logoAlt?: string
  items: PillNavItem[]
  homeHref?: string
  activeHref?: string
  className?: string
  ease?: string
  baseColor?: string
  pillColor?: string
  hoveredPillTextColor?: string
  pillTextColor?: string
  initialLoadAnimation?: boolean
  homeAriaLabel?: string
  menuAriaLabel?: string
  navAriaLabel?: string
}

export default function PillNav({
  logo,
  logoAlt = "Logo",
  items,
  homeHref = "#hero",
  activeHref,
  className = "",
  ease = "power3.out",
  baseColor = "#fff",
  pillColor = "#120F17",
  hoveredPillTextColor = "#120F17",
  pillTextColor,
  initialLoadAnimation = true,
  homeAriaLabel = "Home",
  menuAriaLabel = "Open menu",
  navAriaLabel = "Primary",
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? baseColor
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const circleRefs = useRef<Array<HTMLSpanElement | null>>([])
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([])
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([])
  const logoRef = useRef<HTMLAnchorElement | null>(null)
  const logoImgRef = useRef<HTMLImageElement | null>(null)
  const logoTweenRef = useRef<gsap.core.Tween | null>(null)
  const hamburgerRef = useRef<HTMLButtonElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const navItemsRef = useRef<HTMLDivElement | null>(null)
  const reduceMotionRef = useRef(false)

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return

        const pill = circle.parentElement as HTMLElement
        const { width: w, height: h } = pill.getBoundingClientRect()
        const R = (w * w / 4 + h * h) / (2 * h)
        const D = Math.ceil(2 * R) + 2
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1
        const originY = D - delta

        circle.style.width = `${D}px`
        circle.style.height = `${D}px`
        circle.style.bottom = `-${delta}px`

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` })

        const label = pill.querySelector<HTMLElement>(".pill-label")
        const hoverLabel = pill.querySelector<HTMLElement>(".pill-label-hover")

        if (label) gsap.set(label, { y: 0 })
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 })

        tlRefs.current[index]?.kill()
        const tl = gsap.timeline({ paused: true })

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0)
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0)
        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 })
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0)
        }

        tlRefs.current[index] = tl
      })
    }

    layout()

    const onResize = () => layout()
    window.addEventListener("resize", onResize)
    document.fonts?.ready.then(layout).catch(() => {})

    if (mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, { visibility: "hidden", opacity: 0, y: 0 })
    }

    if (initialLoadAnimation && !reduceMotionRef.current) {
      if (logoRef.current) {
        gsap.set(logoRef.current, { scale: 0 })
        gsap.to(logoRef.current, { scale: 1, duration: 0.6, ease })
      }
      if (navItemsRef.current) {
        gsap.set(navItemsRef.current, { width: 0, overflow: "hidden" })
        gsap.to(navItemsRef.current, { width: "auto", duration: 0.6, ease })
      }
    }

    return () => window.removeEventListener("resize", onResize)
  }, [items, ease, initialLoadAnimation])

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: reduceMotionRef.current ? 0 : 0.3,
      ease,
      overwrite: "auto",
    })
  }

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: reduceMotionRef.current ? 0 : 0.2,
      ease,
      overwrite: "auto",
    })
  }

  const handleLogoEnter = () => {
    if (reduceMotionRef.current) return
    const img = logoImgRef.current
    if (!img) return
    logoTweenRef.current?.kill()
    gsap.set(img, { rotate: 0 })
    logoTweenRef.current = gsap.to(img, { rotate: 360, duration: 0.4, ease, overwrite: "auto" })
  }

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)

    const duration = reduceMotionRef.current ? 0 : 0.3
    const lines = hamburgerRef.current?.querySelectorAll<HTMLSpanElement>(".hamburger-line")
    if (lines) {
      gsap.to(lines[0], { rotation: newState ? 45 : 0, y: newState ? 3 : 0, duration, ease })
      gsap.to(lines[1], { rotation: newState ? -45 : 0, y: newState ? -3 : 0, duration, ease })
    }

    const menu = mobileMenuRef.current
    if (!menu) return

    if (newState) {
      gsap.set(menu, { visibility: "visible" })
      gsap.fromTo(
        menu,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration, ease, transformOrigin: "top center" }
      )
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: 10,
        duration: reduceMotionRef.current ? 0 : 0.2,
        ease,
        transformOrigin: "top center",
        onComplete: () => gsap.set(menu, { visibility: "hidden" }),
      })
    }
  }

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "42px",
    ["--pill-pad-x"]: "18px",
    ["--pill-gap"]: "3px",
  } as React.CSSProperties

  const basePillClasses =
    "relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[15px] leading-[0] tracking-[0.2px] whitespace-nowrap cursor-pointer px-0"

  return (
    <div className={`relative w-full md:w-auto ${className}`} style={cssVars}>
      <nav
        className="box-border flex w-full items-center justify-between gap-2 md:w-max md:justify-start"
        aria-label={navAriaLabel}
      >
        <a
          href={homeHref}
          aria-label={homeAriaLabel}
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
          className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full p-2"
          style={{ width: "var(--nav-h)", height: "var(--nav-h)", background: "var(--base, #000)" }}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} className="block h-full w-full object-cover" />
        </a>

        <div
          ref={navItemsRef}
          className="relative hidden items-center rounded-full md:flex"
          style={{ height: "var(--nav-h)", background: "var(--base, #000)" }}
        >
          <ul role="menubar" className="m-0 flex h-full list-none items-stretch p-[3px]" style={{ gap: "var(--pill-gap)" }}>
            {items.map((item, i) => {
              const isActive = activeHref === item.href
              const pillStyle: React.CSSProperties = {
                background: "var(--pill-bg, #fff)",
                color: isActive ? "var(--base, #fff)" : "var(--pill-text, var(--base, #000))",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)",
                boxShadow: isActive ? "inset 0 0 0 1.5px var(--base)" : undefined,
              }

              return (
                <li key={item.href} role="none" className="relative flex h-full">
                  <a
                    role="menuitem"
                    href={item.href}
                    className={basePillClasses}
                    style={pillStyle}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="hover-circle pointer-events-none absolute bottom-0 left-1/2 z-[1] block rounded-full"
                      style={{ background: "var(--base, #000)", willChange: "transform" }}
                      aria-hidden="true"
                      ref={(el) => {
                        circleRefs.current[i] = el
                      }}
                    />
                    <span className="label-stack relative inline-block leading-[1]">
                      <span className="pill-label relative z-[2] inline-block leading-[1]" style={{ willChange: "transform" }}>
                        {item.label}
                      </span>
                      <span
                        className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                        style={{ color: "var(--hover-text, #fff)", willChange: "transform, opacity" }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label={menuAriaLabel}
          aria-expanded={isMobileMenuOpen}
          className="flex shrink-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-full border-0 p-0 md:hidden"
          style={{ width: "var(--nav-h)", height: "var(--nav-h)", background: "var(--base, #000)" }}
        >
          <span className="hamburger-line h-0.5 w-4 origin-center rounded" style={{ background: "var(--pill-bg, #fff)" }} />
          <span className="hamburger-line h-0.5 w-4 origin-center rounded" style={{ background: "var(--pill-bg, #fff)" }} />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="absolute left-0 right-0 top-[calc(var(--nav-h)+0.75rem)] z-[998] origin-top rounded-3xl shadow-lg md:hidden"
        style={{ ...cssVars, background: "var(--base, #f0f0f0)" }}
      >
        <ul className="m-0 flex list-none flex-col gap-[3px] p-[3px]">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-full px-4 py-3 text-[15px] font-medium transition-colors duration-200"
                style={{ background: "var(--pill-bg, #fff)", color: "var(--pill-text, #fff)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
