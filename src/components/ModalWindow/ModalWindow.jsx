import React from 'react'
import s from './ModalWindow.module.sass'

export default function ModalWindow({children, closeModal}) {
  return (
    <div 
        onClick={closeModal}
        onSubmit={closeModal}
        className={s.container}>
          <div 
            onClick={e=>e.stopPropagation()}
            className={s.modal}
        >
            {children}
        </div>
    </div>
  )
}
