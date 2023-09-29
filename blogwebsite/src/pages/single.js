import React from 'react'
import SinglePost from '../components/singlePost';
import Sidebar from '../components/sidebar';

function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
      
    </div>
  )
}

export default Single;
