import React from 'react'
import Form from './Form'
import Todolist from './Todolist'
import { useState } from 'react'
function Todo() {
const [item,setItem]=useState([])
const [iscompleted,issetCompleted]=useState(false)
const onAdditem=task=>{
   setItem([task,...item])
}
const deleteHandler=(todoValue)=>{
     const todos=item.filter((todo,index)=>index!==todoValue)
        setItem(todos);
      }

const strikeHandler=()=>{
     issetCompleted(!iscompleted);
}
  return (
    <div >
       <Form onAdditem={onAdditem}/>
       <Todolist iscompleted={iscompleted} list={item} deleteHandler={deleteHandler} strikeHandler={strikeHandler}/>
    </div>
  )
}

export default Todo