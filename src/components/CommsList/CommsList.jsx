import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import {Link} from "react-router-dom";
import style from "./CommsList.module.css";

function CommsList(props) {
  console.log("comms", props);
  return (
    <div className={style.card} style={{ width: "25rem" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Teacher: {props.username}</li>
        <li className="list-group-item">Student: {props.student}</li>
        <li className="list-group-item">Today, I did: {props.rating}</li>
        <li className="list-group-item">Date: {props.date}</li>
        <li className="list-group-item">I ate {props.ate} at lunch.</li>
        <li className="list-group-item">I had fun at {props.fun}</li>
        <li className="list-group-item">I need: {props.need}</li>
        <li className="list-group-item">Notes/Observations: {props.notes}</li>
        <DeleteButton id={props.id} handleDeleteComm={props.handleDeleteComm} />
        <Link to={'/update/'+props.id} ><button>Update</button></Link>
        {/* <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {comm}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteComm(comm._id)}
        >
          DELETE
        </button> */}
      </ul>
      <br />
    </div>
  );
}

export default CommsList;
