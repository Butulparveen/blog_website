import React,{useState} from 'react'
import "../styles/incdec.css";

function IncDec() {
    const[count,setcount] =useState(4)

function decrementCount(){
    setcount(prevCount=>prevCount-1)
}

function incrementCount(){
    setcount(prevCount=>prevCount+1)
}
  return (
    <div>
        <button className='button' onClick={decrementCount}>-</button>
        <span className='count'>{count}</span>
        <button className='button'onClick={incrementCount}>+</button>
      
    </div>
  )
}

export default IncDec;
