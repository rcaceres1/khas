import React from "react";
import CreateComm from "../../components/CreateComm/CreateComm";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Comms.module.css";

const Comms = props => {
  const commList = props.comm.map((comm, index) => {
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

  let show = commList.length > 0 ? commList : "Add a Communication Log here!";

  return (
    <div>
      <Navbar user={props.user} handleLogout={props.handleLogout} />
      <div className="jumbotron">
        <h1>
          Welcome, {props.user.name}! See your past communication logs saved
          below!
        </h1>
      </div>
      <div className={style.flex}>{show}</div>
    </div>
  );
};

export default Comms;
