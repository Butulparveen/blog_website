import React from 'react';
import "../styles/post.css";
import {Link} from "react-router-dom";


function Post({img}) {
  return (
    <div className='post'>
        <img className='postImg' src={img} alt=''/>
        <div className='postInfo'>
            <div className='postCat'>
                <span>
                    <Link to='/posts?cat-Music'>
                    Music
                    </Link><hr/>
                </span>
                <span>
                    <Link to='/posts?cat-Life'>
                    Life
                    </Link>
                </span>
            </div>
            <span>
                    <Link to='/posts?abc'>
                    Music is the shortend of emotion
                    </Link>
                </span><hr/>
                <span className='postDate'>
                    1 hour ago
                </span>

        </div>
        <p className='postDesc'>
        Music is one of the most important things throughout my life. I think living without music is impossible for me. It has helped me to face some
         difficult situation in my life as well as help me to motivate myself. I love playing music while driving to places.
          Some music does resemble the journey of my life
        </p>
      
    </div>
  )
}

export default Post;
