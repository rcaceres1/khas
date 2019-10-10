import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  let nav = props.user ?
    <div className="nav">
      <Link className="nav-link justify-content-end" to='/' onClick={props.handleLogout}>LOG OUT</Link>
      <Link className="nav-link" to='/' >Home</Link>
      <Link className="nav-link" to='/comms'>See all Communication Logs</Link>
      <Link className="nav-link" to='/addComm'>Add a Log</Link>
    </div>
    :
    <div className="nav">
      <Link className="nav-link" to='/login'>LOG IN</Link>
      <Link className="nav-link" to='/signup'>SIGN UP</Link>
    </div>;

  return(
    <nav className="nav justify-content-end">
      {nav}
    </nav>
  )
}

export default NavBar;