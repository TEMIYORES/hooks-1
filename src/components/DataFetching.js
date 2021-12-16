import React, {useState, useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res =>
        {console.log(res.data) 
        setPosts(res.data)})
        .catch(err => console.log(err))
    }, [])
    return (
        <>
        {
            posts.map(post => {
           return <div key={post.id}>
               <h1>{post.title}</h1> 
               <p>{post.body}</p>
            </div>
            })
        }
        </>
    )
}

export default DataFetching
