import React from 'react'
import s from './Post.module.sass'

export default function Post({data}) {
  return (
    <div className={s.post}>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
    </div>
  )
}
