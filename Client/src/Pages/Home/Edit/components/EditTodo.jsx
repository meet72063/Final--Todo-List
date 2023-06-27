import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EditTodo = () => {
    const [todo,setTodo]=useState('')

  const navigate = useNavigate()
 const {id}=useParams()
 
    useEffect(()=>{
        const getTodo = async()=>{
             const response = await axios.get(`http://localhost:3000/api/v1/todo/${id}`)
             
             const {name,completed} = response.data[0]
             setTodo({name,completed})
             
            
        }
      getTodo()
       
    },[])

    const handleSave = async(e)=>{
        e.preventDefault()

        if(!todo.name){
            alert("Todo name can't be empty")
            return
        }
        else{
            await axios.patch(`http://localhost:3000/api/v1/todo/patch/${id}`,{name:todo.name,completed:todo.completed},{
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            })
           navigate('/')
        }
        

    }

    const handleChange=(e)=>{
        
        setTodo({...todo,name:e.target.value})
       
    }
    
    if(!todo){
       return <h1>Loading...</h1>
    }

  return (
    <><form >
    <label htmlFor='todo'>Name:</label>
      <input 
      id='todo'
      value={todo.name}
      onChange={handleChange}
      />
       <label htmlFor='checkBox'>Completed:</label>
        <input 
        id='checkBox'
         type='checkbox'
        
         checked={todo.completed}
         onChange={(e)=>setTodo({...todo,completed:!todo.completed})}
        />
      <button type='submit' onClick={handleSave}>Save</button>
      <button onClick={()=>{navigate('/')}}> Cancel</button>
   </form></>
   
  )
}

export default EditTodo
