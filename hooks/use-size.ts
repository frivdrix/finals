"use client"

import type React from "react"

import { useEffect, useState } from "react"

export interface Size {
  width: number | null
  height: number | null
}

export function useSize(ref: React.RefObject<HTMLElement>): Size | null {
  const [size, setSize] = useState<Size | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new ResizeObserver(() => {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight,
      })
    })

    observer.observe(element)

    // Set initial size
    setSize({
      width: element.offsetWidth,
      height: element.offsetHeight,
    })

    return () => observer.disconnect()
  }, [ref])

  return size
}
