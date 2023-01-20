import React from 'react';

const NoteEditor = () => {
    return (
        <section className='textEditorArea'>
            <form className='textEditorForm'>
                <textarea className='titleArea'placeholder='Add your title here'></textarea>
                <textarea className='noteContent' placeholder='Add your note text here'></textarea>
                <button className='noteSubmitButton' type='submit'>Save</button>
            </form>
        </section>
    )
}

export default NoteEditor;