import React from "react";
import "./AddNote.css";

const AddNote = ({changeEvent, noteText, saveEvent, maxLength}) =>{
    return(

        <div className="note add-new-note">

            <textarea 
                rows="8" 
                cols="10" 
                value={noteText}
                onChange={changeEvent} 
                placeholder="Type to add a note..." 
            >
            </textarea>

            <div className="inline-add-note">

                <p>{maxLength - noteText.length} Remaining</p>
                <button className="button-save" onClick={saveEvent}>Save</button>

            </div>

        </div>

    );
};

export default AddNote;