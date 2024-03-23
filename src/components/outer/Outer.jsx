import React, { useState } from 'react'
import "../../App.css"

import "./style.css"
import Inner from './inner/Inner'
const Outer = () => {

    let arr=["clr","1","2","3","4","5","6","7","8","9","0","+","-","*","/","="]
  return (
    <div className='outer back'>


      <Inner arr={arr}/>
        

        
      
    </div>
  )
}

export default Outer
