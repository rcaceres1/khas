import React from "react";
import CreateComm from "../CreateComm/CreateComm";
import Navbar from "../Navbar/Navbar";
import CommsList from '../CommsList/CommsList';
import style from "./Comms.module.css";

const Comms = props => {
  console.log(props)
  const commList = props.comms && props.comms.map((comm, index) => {
    return (
      
      <CreateComm
        {...comm}
        key={index}
        index={index}
        handleDeleteComm={props.handleDeleteComm}
        user={props.user}
      />
    );
  });

  let show = commList && commList.length > 0 ? commList : "Add a Communication Log here!";

  return (
    <div>
      <Navbar user={props.user} handleLogout={props.handleLogout} />
      <div className="jumbotron">
        <h1>
          Welcome, {props.user.name}! See your past communication logs saved
          below!
        </h1>
        <CommsList />
      </div>
      <div className={style.flex}>{show}</div>
    </div>
  );
};

export default Comms;
