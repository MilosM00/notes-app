import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import "./NoteList.css";

const NoteList = ({ notes, addNoteEvent, deleteNoteEvent }) =>{

    const maxLength = 200;

    const [noteText, setNoteText] = React.useState("");

    const changeEvent = (e) =>{
        if(maxLength - e.target.value.length >= 0)
        {
            setNoteText(e.target.value);
        }
    };

    const saveEvent = () =>{
        if(noteText.trim().length > 0)
        {
            addNoteEvent(noteText);
            setNoteText("");
        }
    };

    return(

        <div className="note-list">

            {notes.map((note) => (

                <Note 
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    deleteNoteEvent={deleteNoteEvent}
                />
    
            ))}

            <AddNote 
                changeEvent={changeEvent}
                noteText={noteText}
                saveEvent={saveEvent}
                maxLength={maxLength}
            />

        </div>

    );
};

export default NoteList;