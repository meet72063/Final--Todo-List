import Container from 'react-bootstrap/Container';
import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import './index.css'




function SharedLayout() {
  return (<>
  <nav className='nav'>
        <h1 className='icon'>Todos...!!</h1>
        <Link to='/' className='link'><h1>AllTodos</h1></Link>
        <Link to='/completed' className='link'><h1>Completed Todos</h1></Link>
        <Link to='/pending' className='link'><h1>Pending Todos</h1></Link>
        
      
    </nav>
    <Outlet/></>

    
  );
}

export default SharedLayout;