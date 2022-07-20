import React from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";

const App = () =>{

    const [notes, setNotes] = React.useState([
        {
            id: nanoid(),
            text: "This is test one!",
            date: "18.07.2022.",
        },
        
        {
            id: nanoid(),
            text: "This is test two!",
            date: "18.07.2022.",
        },

        {
            id: nanoid(),
            text: "This is test three!",
            date: "18.07.2022.",
        }

    ]);

    const addNoteEvent = (text) =>{
        const date = new Date();

        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString("sr-RS")
        }

        const newNotes= [...notes, newNote];

        setNotes(newNotes);
    };

    const deleteNoteEvent = (id) =>{
        const newNotes = notes.filter((note)=> note.id !== id);
        setNotes(newNotes);
    };

    return(

        <div className="app">

            <NoteList 
                notes={notes}
                addNoteEvent={addNoteEvent}
                deleteNoteEvent={deleteNoteEvent}
            />
            
        </div>

    );
};

export default App;