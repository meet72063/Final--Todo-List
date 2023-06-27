import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const url = 'http://localhost:3000/api/v1/todo'
const Todo = ({name,completed,_id,index}) => {
 const navigate = useNavigate()
    const editHandler =()=>{
        navigate(`/edit/${_id}`)
    }
    const deleteHandler=async()=>{
     const response =await axios.delete(`${url}/${_id}`)
     window.location.reload()
      
    }

  return (
    <div>
       
       <h1> {`${index} ${name}`} </h1>
       <h2>Status:{completed?"completed":"pending"}</h2>
           <button onClick={editHandler}>Edit Todo</button>
       <button onClick={deleteHandler}>Delete Todo</button>
    </div>
  )
}

export default Todo
