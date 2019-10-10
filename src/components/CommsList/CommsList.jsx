import React from 'react';
import DeleteButton from '../DeleteButton/DeleteButton'
import style from './CommsList.module.css'

function CommsList ({username, student, date, rating, index, handleDeleteComm, user, _id}) {
    return (
        <div className={style.card} style={{width: "25rem"}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Teacher: {username}</li>
                <li className="list-group-item">Student: {student}</li>
                <li className="list-group-item">Date: {date}</li>
                <li className="list-group-item">How Did I Feel Today? {rating}</li>
                <DeleteButton 
                    index={index}
                    _id={_id}
                    handleDeleteComm={handleDeleteComm}
                    user={user}
                />
            </ul>
        </div>
    )
}

export default CommsList;

  