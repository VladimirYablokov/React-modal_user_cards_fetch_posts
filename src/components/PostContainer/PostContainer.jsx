import React, {useState, useEffect} from 'react'
import Post from '../Post/Post'
import s from './PostContainer.module.sass'

export default function PostContainer() {

    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => setPosts(data))
    };

    useEffect(getPosts, []);

  return (
    <div className={s.container}>
        {posts.map(post => <Post key={post.id} data={post} />)}
    </div>
  )
}
