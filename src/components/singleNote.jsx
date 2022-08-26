import "./singleNote.css"

import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('New note added successfully');


export default function SingleNote({ setShowModal, setNotes }) {

    function handleSetShowModal(value) {
        setTimeout(() => {
            setShowModal(value)
        }, 1000);
    }

    const handleAddNote = (e) => {
        e.preventDefault()
        if(e.target[1].value) {

            let title = e.target[0].value,
                note = e.target[1].value

            setNotes((prevNotes) => {
                return [...prevNotes, {Id: prevNotes.length + 1, Title: title, Note: note}]
            })

            handleSetShowModal(false)
        } 

        e.target[0].value = ''
        e.target[1].value = ''
    }

    return (
        <div className='Note__Backdrop'>
            <div className="Note__Container">
                <div className="header">
                    <div className="Back__Icon" title="Back">
                        <span onClick={()=> {setShowModal(false)}}>&larr;</span>
                    </div>
                    <h2 className="heading">New Note</h2>
                </div>
                <form className="Add__New__Note" onSubmit={handleAddNote}>
                <label >
                    <input type="text" 
                        placeholder="Title" 
                        className="Note__Title" 
                    />
                </label>
                <textarea name="note" 
                    id="new-note" 
                    cols="30" rows="15" 
                    placeholder="Write your note here"
                ></textarea>
                <div className="Submit-btn">
                    <button type="submit"  onClick={notify}>Add Note</button>
                    <Toaster />
                </div>
                </form>
            </div>
        </div>
    )
}