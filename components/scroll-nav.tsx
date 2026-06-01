"use client"

import { useEffect } from "react"

const sectionIds = ["home", "projects", "music", "pottery"]

export function ScrollNav() {
  useEffect(() => {
    // smooth scroll on tab/monogram click
    const clickHandlers: Array<{ el: Element; fn: (e: Event) => void }> = []
    document.querySelectorAll<HTMLElement>("[data-tab]").forEach((el) => {
      const fn = (e: Event) => {
        const t = el.dataset.tab
        const target = t ? document.getElementById(t) : null
        if (!target) return
        e.preventDefault()
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        history.replaceState(null, "", "#" + t)
      }
      el.addEventListener("click", fn)
      clickHandlers.push({ el, fn })
    })

    // active tab follows scroll position
    const tabs = document.querySelectorAll<HTMLElement>(".tab")
    function updateActive() {
      const trigger = 110 // px below viewport top (clears the sticky nav)
      let active = "home"
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= trigger) active = id
      }
      tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === active))
    }

    let rafQueued = false
    const onScroll = () => {
      if (rafQueued) return
      rafQueued = true
      requestAnimationFrame(() => {
        updateActive()
        rafQueued = false
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    updateActive()

    // honor hash on load
    const start = (location.hash || "").replace("#", "")
    if (sectionIds.includes(start)) {
      requestAnimationFrame(() => {
        const el = document.getElementById(start)
        if (el) el.scrollIntoView({ block: "start" })
      })
    }

    return () => {
      window.removeEventListener("scroll", onScroll)
      clickHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn))
    }
  }, [])

  return null
}
