import React from 'react'
import Button from '../UI/Button';
import s from './UserTriggerContainer.module.sass'

export default function UserTriggerContainer({count, getPosts}) {

    const triggers = [];
    for(let i = 0; i < count; i++){
        const index = i+1;
        triggers.push(<Button onClick={()=>getPosts(index)} key={i}>{index}</Button>)
    }


  return (
    <div className={s.container}>
        {triggers}
    </div>
  )
}
