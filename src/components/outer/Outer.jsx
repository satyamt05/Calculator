import React, { useState } from 'react'

import "./style.css"
import Inner from './inner/Inner'
const Outer = () => {

    let arr=["clr","1","2","3","4","5","6","7","8","9","0","+","-","*","/","="]
  return (
    <div className='outer'>


      <Inner arr={arr}/>
        

        
      
    </div>
  )
}

export default Outer
