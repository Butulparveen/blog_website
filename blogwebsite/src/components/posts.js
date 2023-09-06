import React from "react";
import Post from "./post.js";
import "../styles/posts.css";

function Posts() {
  return (
    <div>
      <h1>Posts using Multiple Images</h1>
      <div className="posts">
        <Post img="https://tse2.mm.bing.net/th?id=OIP.7uVYT4KcreJu09nemQb9uAHaEo&pid=Api&P=0&h=180" />
        <Post img="https://tse2.mm.bing.net/th?id=OIP.05dBuwm0_wf230DZIhMErQHaFM&pid=Api&P=0&h=180" />
        <Post img="https://tse4.mm.bing.net/th?id=OIP.ikk26DY9C5s037O3ZL1TwAHaE8&pid=Api&P=0&h=180" />
        <Post img="https://tse2.mm.bing.net/th?id=OIP._qvOXMuSgeCroTW7SYJUrAHaFj&pid=Api&P=0&h=180" />
        <Post img="https://tse4.mm.bing.net/th?id=OIP.tPyvZYJ2wuD7qigtvHYySQHaE5&pid=Api&P=0&h=180" />
        <Post img="https://tse2.mm.bing.net/th?id=OIP._qvOXMuSgeCroTW7SYJUrAHaFj&pid=Api&P=0&h=180" />
      </div>
    </div>
  );
}

export default Posts;
