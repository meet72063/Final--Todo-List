import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CreateTodo = () => {
 const [todoName,setTodoName] = useState('')
 const [completed,setCompleted] = useState(false)
 const url = 'http://localhost:3000/api/v1/todo'
 const navigate = useNavigate()


 const onChangeHandler =(e)=>{
     setTodoName(e.target.value)
 }

const onSubmitHandler=async (e)=>{
   e.preventDefault()
   if(!todoName){
    alert("please provide Todo name")
   }
   else{
  const response = await axios.post(url,{name:todoName,completed:completed})
    setTodoName('')
    setCompleted(false)
    window.location.reload()
   }

}

  return (
    <div>
      <form  className="form">
        <label id='createTodo'>Create Todo:</label>
        <input
        type='text'
         id='createTodo'
         value={todoName}
         onChange={onChangeHandler}
        />
         <label id='checkBox'>Status:</label>
        <input 
        id='checkBox'
         type='checkbox'
         checked={completed}
         onChange={()=>setCompleted(!completed)}
        />
        <button type='submit' onClick={onSubmitHandler}>Save</button>
        
       
      </form>
    </div>
  )
}

export default CreateTodo
