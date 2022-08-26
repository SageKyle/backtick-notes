import { useState } from "react";
import SingleNote from "./singleNote";
import "./notes.css"

export default function Notes() {
    const [ showModal, setShowModal ] = useState(false)
    const [ Notes, setNotes ] = useState([
        {
            Title: 'digital minimalist',
            Id: 1,
            Note: "I'm currently reading the book Digital Minimalist by Cal Newport. It's really an interesting read."
        },
        {
            Title: 'deep work',
            Id: 2,
            Note: "I read the book Deep Work by Cal Newport. It's really an interesting and insightful book to read."
        }
        ])

    return (
        <div className= 'Notes__Container'>
           <h2 className="Brand__Name">BackTick Notes</h2>
           {showModal && <SingleNote setShowModal={setShowModal} setNotes={setNotes} />}
           {!showModal && <>
                <button onClick={()=> {setShowModal(true)}} className="Add__Note">Add Note</button>
                <div className= 'Notes'> 
                    { Notes && Notes.map(note => {
                        return (
                            <div key= {note.Id} className="Note__Item" onClick={(e) => e.target.classList.toggle('Expand__Note')}>
                                <h4 className="Note__Item__Heading">{note.Title}</h4>
                                <p className="Note__Item__Note">{note.Note}</p>
                            </div>
                        )
                    })}
                </div>
            </>}
        </div>
    )
}