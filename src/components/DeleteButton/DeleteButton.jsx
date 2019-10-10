import React from "react";

const DeleteButton = ({ index, handleDeleteComm, user, _id }) => {
  return (
    <button
      className="btn btn-danger"
      onClick={() => handleDeleteComm(index, user, _id)}
    >
      Delete Communication Log
    </button>
  );
};

export default DeleteButton;
