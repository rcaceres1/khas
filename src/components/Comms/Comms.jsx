import React from "react";
import Navbar from "../Navbar/Navbar";
import CommsList from "../CommsList/CommsList";
import style from "./Comms.module.css";

const Comms = props => {
  const commList =
    props.comms &&
    props.comms.map((comm, index) => {
      return (
        <CommsList
          key={index}
          username={comm.username}
          student={comm.student}
          date={comm.date}
          rating={comm.rating}
          ate={comm.ate}
          fun={comm.fun}
          notes={comm.notes}
          need={comm.need}
          id={comm._id}
          handleDeleteComm={props.handleDeleteComm}
        />
      );
    });

  let show =
    commList && commList.length > 0
      ? commList
      : "Add a Communication Log here!";

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
