import React, {useState, useEffect} from 'react'
import axios from 'axios'


function DataFetching() {

const [loading, setLoading] = useState(true)
const [error, setError] = useState('')
const [post, setPost] = useState({})

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(res =>{
        setLoading(false)
        setError('')
        setPost(res.data)
    })
    .catch(()=>{
         setLoading(false);
         setPost({})
         setError('Something went wrong!');
    })
})
    return (
        <div>
            {
                loading ? <div>Loading ...</div> : <div>{post.title} <p>{post.body}</p></div>
            }
            {
                <div>{error}</div>
            }
        </div>
    )
}

export default DataFetching
