import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import style from "./CommsList.module.css";

function CommsList(props) {
  return (
    <div className={style.card} style={{ width: "25rem" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Teacher: {props.username}</li>
        <li className="list-group-item">Student: {props.student}</li>
        <li className="list-group-item">Date: {props.date}</li>
        <li className="list-group-item">How Did I Feel Today? {props.rating}</li>
        <DeleteButton />
      </ul>
    </div>
  );
}

export default CommsList;
