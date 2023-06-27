import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Todo from './components/Todo'
import CreateTodo from './components/CreateTodo'

const url = 'http://localhost:3000/api/v1/todo'



const Home = () => {
  const [allTodo,setAllTodo]=useState()
  
 

  useEffect(()=>{
    const alltodoRequest = async ()=>{
      const response = await axios.get(url)
      
        setAllTodo(response.data)
        
  }
  
  alltodoRequest()
   
  },[])
  
  return (
    <div>
       <div className="createTodo">
          <CreateTodo/>
    </div>
    
    

     {allTodo?allTodo.map((todo)=>{
      const index = allTodo.indexOf(todo)
         return  <div key={todo._id}>
          <Todo {...todo} index={index+1} />
        </div>
       }):"loading"} 
      

       
    </div>
  )
}

export default Home
