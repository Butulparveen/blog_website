// import React,{useState} from 'react';
// import { useEffect } from "react";

// function Fetchapi() {
//     const[resourceType,setResourceType] = useState('Posts')
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/${resourceType}')
//         .then(resource=>Response.json())
//         .then(json=>console.log(json))
//     },[resourceType])
    
// return(
//     <>
//     <div>
//         <button onClick={()=>setResourceType('posts')}>Posts</button>
//         <button onClick={()=>setResourceType('users')}>Users</button>
//         <button onClick={()=>setResourceType('comments')}>Comments</button>
//     </div>
//     <h1>{resourceType}</h1>
//     {/* {items.map(item=>{ */}
//         return<pre>
//             {JSON.stringify(item)}
//         </pre>
//     })}
//     </>
//   )
// }

// export default Fetchapi

// // import { useEffect } from "react";

// // export default function FetchAPI(){
// //     const[resourceType,setResourceType] = useState('posts')
// //     useEffect(()=>{
// //         fetch('https://jsonplaceholder.typicode.com/${resourceType}')
// //         .then(resource=>Response.json())
// //         .then(json=>console.log(json))
// //     },[resourceType])
// // }

// // return(
// //     <>
// //     <div>
// //         <button onClick={()=>setResourceType('posts')}>Posts</button>
// //         <button onClick={()=>setResourceType('users')}>Users</button>
// //         <button onClick={()=>setResourceType('comments')}>Comments</button>
// //     </div>
// //     <h1>{resourceType}</h1>
// //     {items.map(item=>{
// //         return<pre>
// //             {JSON.stringify(item)}
// //         </pre>
// //     })}
// //     </>
// // )