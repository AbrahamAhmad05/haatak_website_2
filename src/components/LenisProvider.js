'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'

export default function LenisProvider({ children }) {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [lenis])

  return (
    <>
    <ReactLenis root />
      {children}
      </>
    // </ReactLenis>
  )
}
