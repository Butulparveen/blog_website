import React, { useEffect, useState } from 'react';
import axios from 'axios';

//axios using get method for useState using null by try and catch
const client =axios.create({baseURL:"https://jsonplaceholder.typicode.com/posts"})
// const baseURL = "https://jsonplaceholder.typicode.com/posts";

function AxiosApiDelete() {
    const[post,setPost] = useState(null);
    // const[error] = useState(null);


    useEffect(()=>{
        async function getPost(){
            const response = await client.get("/1");
            setPost(response.data);
        }
        getPost();
       
    },[]);
        async function deletePost(){
            await client.delete("/1");
            alert("Post Deleted");
            setPost(null);
        }

    // useEffect(()=>{
    //     client.get("/1").then((response)=>{
    //         setPost(response.data);
    //     }).catch(error=>{
    //         setError(error);
    //     });
     
    // },[]);

    
//axios using Delete Post method using async and await
// async function deletePost(){
//     await baseURL.delete("/1");
//     alert("Post Deleted");
//     setPost(null);
// }


//axios using delete then and response 
// ;;;;;; correct function of delete
// function deletePost(){
//     axios.delete(`${baseURL}/1`)
//     .then(()=>{
//         alert("Post Deleted")
//     })
// }



//axios using Delte Post method for useState using null
// function deletePost(){
//     client.delete("/1")
//     .then(()=>{
//         alert("Post Deleted");
//         setPost(null)
//     });
// }

// axios using Post method for useState using null
// function createPost(){
//     axios.post(`${baseURL}`,{
//         title:"Hello",
//         body:"New Post Method"
//     })
//     .then((response)=>{
//         setPost(response.data)
//     })
// }


// if(error) return `Error: $(error.message)`;
if(!post) return "No Post";
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* <button onClick={createPost}>Create Post</button> */}
      <button onClick={deletePost}>Delete Post</button>
      {/* <button onClick={createPost}>Create Post</button> */}

    </div>
  )
}

export default AxiosApiDelete;
