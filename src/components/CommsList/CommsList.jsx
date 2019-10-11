import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import style from "./CommsList.module.css";

function CommsList(props) {
  console.log("comms", props);
  return (
    <div className={style.card} style={{ width: "25rem" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Teacher: {props.username}</li>
        <li className="list-group-item">Student: {props.student}</li>
        <li className="list-group-item">Date: {props.date}</li>
        <li className="list-group-item">I ate {props.ate} of my lunch.</li>
        <li className="list-group-item">I had fun at {props.fun}</li>
        <li className="list-group-item">I need: {props.need}</li>
        <li className="list-group-item">Notes/Observations: {props.notes}</li>
        <DeleteButton id={props.id} handleDeleteComm={props.handleDeleteComm} />
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
