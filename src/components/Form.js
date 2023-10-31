import React from 'react'

import { useState } from 'react'
function Form(props) {
    const [task,setTask]=useState(null)
    const Handler=e=>{
         setTask(e.target.value)
    }
    const formsubmit=event=>{
       event.preventDefault();
       props.onAdditem(task);
       setTask('');
    }
  return (
    <div>
      
    
    <center>
   <form  onSubmit={formsubmit}>
   <input type="text" value={task} placeholder="enter your task"onChange={Handler}/>
  
   <button style={{color:"red"}}>Add</button>
   </form>
   </center>
  
    </div>
  )
}

export default Form