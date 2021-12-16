import React, {useState, useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res =>
        {console.log(res.data) 
        setPost(res.data)})
        .catch(err => console.log(err))
    }, [idFromButtonClick])

    const handleButtonClick = () => {
        setIdFromButtonClick(id)
    }
    return (
        <>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={handleButtonClick}>Fetch Post</button>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        {/* {
            post.map(posts => {
           return <div key={posts.id}>
               <h1>{posts.title}</h1> 
               <p>{posts.body}</p>
            </div>
            })
        } */}
        </>
    )
}

export default DataFetching
