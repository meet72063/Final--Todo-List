

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Todo from '../Home/components/Todo'

const url = 'http://localhost:3000/api/v1/todo/completed/todo'



const CompletedTodos = () => {
  const [allTodo,setAllTodo]=useState('')
  
 

  useEffect(()=>{
    const alltodoRequest = async ()=>{
      const response = await axios.get(url)
        setAllTodo(response.data)
        
  }
  
  alltodoRequest()
   
  },[])
  
  return (
    <div>
      
    

     {allTodo?allTodo.map((todo)=>{
      const index = allTodo.indexOf(todo)
         return  <div key={todo._id}>
          <Todo {...todo} completed={false} index={index+1} />
        </div>
       }):"loading"} 
      

       
    </div>
  )
}

export default CompletedTodos

