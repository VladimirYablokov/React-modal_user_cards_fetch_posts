import React, {useState, useEffect} from 'react'
import User from '../User/User';
import UserTriggerContainer from '../UserTriggerContainer';
import s from './UserCOntainer.module.sass'

export default function UserContainer() {

    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState([]);

    const getPosts = (id) => {
        fetch(`https://reqres.in/api/users?page=${id}`)
            .then(data => data.json())
            .then(data => {setUsers(data.data); setPages(data.total_pages)});
    };

    useEffect(()=>getPosts(1), []);

  return (
    <div className={s.outContainer}>
        <div className={s.container}>
        {
            (users.length === 0) ?
            <p className={s.load}> данные грузятся...</p> :
            users.map(user=><User key={user.id} {...user}/>)
        }
        </div>
        <UserTriggerContainer getPosts={getPosts} count={pages}/>
    </div>

  )
}
