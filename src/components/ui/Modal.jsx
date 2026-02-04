import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion as Motion } from 'framer-motion'

export default function Modal({ isOpen, onClose, children, title }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/70" onClick={onClose} aria-hidden />

      <Motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="z-50 max-w-lg w-full p-6 bg-slate-900 text-white rounded-2xl shadow-lg">
        {title && <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>}
        <div className="text-slate-300">{children}</div>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="px-4 py-2 rounded-md bg-slate-800 text-white">Close</button>
        </div>
      </Motion.div>
    </div>,
    document.body,
  )
}
