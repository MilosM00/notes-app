import React from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";

const App = () =>{

    const [notes, setNotes] = React.useState([
        {
            id: nanoid(),
            text: "This is test one!",
            date: "19.07.2022.",
        },
        
        {
            id: nanoid(),
            text: "This is test two!",
            date: "18.10.2022.",
        },

        {
            id: nanoid(),
            text: "This is test three!",
            date: "28.07.2022.",
        }

    ]);

    return(

        <div className="app">

            <NoteList 
                notes={notes}
            />
            
        </div>

    );
};

export default App;