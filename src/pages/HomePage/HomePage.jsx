import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const HomePage = (props) =>{
  
  return(
    <div>
      <Navbar 
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <div>
        <h3>Welcome to Khas (pronounced 'hos')! Your one-stop shop to communicate between you and your parents to discuss your
            exceptional child's progress!</h3>
        {props.user ? <h4>Add a communication log to get started!</h4> : <h4>Login to get started!</h4>}
      </div>
    </div>
  )
}
export default HomePage;