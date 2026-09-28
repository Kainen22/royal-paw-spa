'use client'

import { useEffect, useState } from 'react'

type CursorState = {
  x: number
  y: number
  visible: boolean
  text: boolean
}

export function PawCursor() {
  const [pos, setPos] = useState<CursorState>({
    x: 0,
    y: 0,
    visible: false,
    text: false,
  })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    document.documentElement.classList.add('has-paw-cursor')

    const move = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      const text = Boolean(
        target?.closest('input, textarea, [contenteditable="true"]'),
      )
      setPos({ x: event.clientX, y: event.clientY, visible: true, text })
    }

    const hide = () => setPos((current) => ({ ...current, visible: false }))

    window.addEventListener('pointermove', move)
    document.addEventListener('mouseleave', hide)

    return () => {
      document.documentElement.classList.remove('has-paw-cursor')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('mouseleave', hide)
    }
  }, [])

  if (!pos.visible || pos.text) return null

  return (
    <img
      src="/cursors/paw.png"
      alt=""
      aria-hidden
      className="paw-cursor"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  )
}
