import React from "react";

const DeleteButton = props => {
  console.log('delete button', props)
  return (
    <button className="btn btn-danger" onClick={() => props.handleDeleteComm(props.id)}>
      Delete Communication Log
    </button>
  );
};

export default DeleteButton;
