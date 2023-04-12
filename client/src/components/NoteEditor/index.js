import React, {useState} from 'react';

const NoteEditor = (noteText) => {

    if(!noteText) {
        noteText = {
            title: "",
            content: ""
        };
    };

    const [noteInfo, setNoteInfo] = useState({id: "", title: "", content: ""});

    const handleNoteChange = (event) => {
        console.log(event.target);
        setNoteInfo({
            ...noteInfo,
            content: event.target.value
        })
        console.log(noteInfo);
    }

    const handleTitleChange = (event) => {
        setNoteInfo({
            ...noteInfo,
            title: event.target.value
        })
        console.log(noteInfo);
    }

    const handleNoteSubmit = async (event) => {
        if(noteInfo.id.length() > 0) {
            
        try {
            await fetch("http://localhost:3001/api/todo", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(noteInfo),
            })
            .then(response => response.json())
            .then((processedResponse) => {
                console.log(processedResponse);
            })
        }
        catch(e) {
            console.error(e);
        }
        }
        else {
            try {
                await fetch(`http://localhost:3001/api/todo/${noteInfo.id}`, {
                    method: "PUT",
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(noteInfo)
                })
                .then(response => response.json())
                .then(processedResponse => {
                    console.log(processedResponse);
                })
            }
            catch(e) {
                console.error(e);
            }
        }
    }

    return (
        <section className='textEditorArea'>
            <form className='textEditorForm'>
                <textarea className='titleArea'placeholder='Add your title here' onChange={handleTitleChange} value={noteText.title}></textarea>
                <button type="button" className='newNoteButton'>New Note</button>
                <textarea className='noteContent' placeholder='Add your note text here' onChange={handleNoteChange} value={noteText.content}></textarea>
                <button type='submit' className='noteSubmitButton' >Save Note</button>
            </form>
        </section>
    )
}

export default NoteEditor;