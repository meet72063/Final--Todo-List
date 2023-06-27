import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout/SharedLayout'
import './App.css'
import { useState } from 'react'
import EditTodo from './Pages/Home/Edit/components/EditTodo'
import CompletedTodos from './Pages/completed_Todos/completdTodos'
import Pending_Todos from './Pages/Pending_Todos/Pending_Todos'

function App() {
  const [editTodo,setEditTodo]=useState('')

  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path='/'element={<SharedLayout/>} >
         <Route index element={<Home setEditTodo={setEditTodo}/>}/>
         <Route path='/edit/:id' element={<EditTodo/>} />

         <Route  path='completed' element={<CompletedTodos/>} />
         <Route  path='pending' element={<Pending_Todos/>} />

        </Route>
        
     </Routes>
    
    </BrowserRouter>
     
     
      
    </>
  )
}

export default App
