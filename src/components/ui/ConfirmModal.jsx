import React from 'react'
import Modal from './Modal'

export default function ConfirmModal({ isOpen, onClose, onConfirm, message = 'Are you sure?' }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirm">
      <p className="text-slate-300">{message}</p>
      <div className="mt-4 flex justify-end gap-3">
        <button onClick={onClose} className="px-4 py-2 rounded-md border border-white/6 text-white">Cancel</button>
        <button onClick={() => { onConfirm(); onClose(); }} className="px-4 py-2 rounded-md bg-red-600 text-white">Confirm</button>
      </div>
    </Modal>
  )
}
