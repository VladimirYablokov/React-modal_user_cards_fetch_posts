import React from 'react'
import s from './Field.module.sass'

export default function Field({label, ...props}) {
  return (
    <label className={s.field}>
        <p>{label}</p>
        <input {...props}/>
    </label>
  )
}
