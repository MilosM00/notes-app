import React from "react";
import "./Note.css";

const Note = ({id, text, date, deleteNoteEvent}) =>{
    return(

        <div className="note">

            <p>{text}</p>

            <div className="inline-note">
                <p>{date}</p>
                <p className="trash" onClick={() => deleteNoteEvent(id)}><i className="fa fa-trash"></i></p>
            </div>

        </div>

    );
};

export default Note;