import React from 'react'
import s from './CloseBtn.module.sass'

export default function CloseBtn({handler}) {
  return (
    <button onClick={handler}  className={s.closeBtn}>❌</button>
  )
}
