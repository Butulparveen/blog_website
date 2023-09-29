import React, { useEffect, useState } from 'react';
import axios from 'axios';

//axios using get method for useState using null
const baseURL = "https://jsonplaceholder.typicode.com/posts";
function AxiosApi() {
    const[post, setPost] = useState(null);

    useEffect(()=>{
        axios.get(`${baseURL}/1`).then((response)=>{
            setPost(response.data)
        });
    },[]);

//axios using Post method for useState using null
// const baseURL = "https://jsonplaceholder.typicode.com/posts";
// function AxiosApi() {
//     const[post, setPost] = useState(null);

//     useEffect(()=>{
//         axios.get(`${baseURL}/1`).then((response)=>{
//             setPost(response.data)
//         });
//     },[]);

function createPost(){
    axios.post(baseURL,{
        title:"Hello",
        body:"New Post Method"
    })
    .then((response)=>{
        setPost(response.data)
    })
}



if(!post) return "No Post"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
     
    </div>
  )
}

export default AxiosApi;
