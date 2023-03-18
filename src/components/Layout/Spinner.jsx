import React from 'react'
import spinner from "../../assets/spinner.gif"

function Spinner() {
  return (
      <div className='hero mt-20 '>
          <img width={280} src={spinner} clasName="text-center mx-auto"  alt="Loading..." /> 
    </div>
  )
} 

export default Spinner