import React, { useEffect, useState } from 'react'

function ApiFetchtryCatch() {
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((Response)=>Response.json())
        .then((data)=>{
            console.log(data)
            setPosts(data);
        })
        .catch(err=>{
            console.log(err.message)
        })
    },[]);
  return (
    <div>
        {posts.map((post)=>{
            return(<div key = {post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
            )
            // })
        })}
      
    </div>
  )
}

export default ApiFetchtryCatch;
