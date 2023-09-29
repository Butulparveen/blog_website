import React from 'react'
import { FaPlus } from 'react-icons/fa';
import '../styles/write.css';
import Footer from "../components/footer.js"

function Write() {
  return (
    <div className='write'>
        <h1 className='writeDesc'>LEAVE A REPLAY</h1>
        <img className='writeImg' src='https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg' alt=''/>
        <form className='writeForm'>
        <h1 className='writeDescTitle'>Your Comment will not be published. Required fields are marked *</h1>
            <div className='writeFormGroup'>
                <label><FaPlus className='writeIcon'/></label>
                <input className='writeInput' type='file' style={{display:"none"}}/>
                <input className='writeInput' placeholder='Comment*' type='text' autoFocus={true}/>
            </div>
            <div className='writeFormGroup'>
                <textarea className='writeText' placeholder='Tell me something .....' type='text' autoFocus={true}/>
            </div>
            <button className='writeSubmit' type='submit'>Publish Post Comment</button>

        </form>
        
      {/* <Footer/> */}
    </div>
  )
}

export default Write;
