import React from "react";

const NoteItem = (key) => {

    

    return (
        <div className='noteItem' key={key}>
            <div className='NoteTitleArea'>
                <h3>Title 1</h3>
                <p className='NoteDueDate'>1/26/2023</p>
            </div>
            <div className='NoteText'>
                <p>Ea proident officia Lorem excepteur ullamco ad magna veniam tempor nulla. Voluptate cupidatat reprehenderit adipisicing consequat. Ex irure culpa deserunt nostrud aute veniam esse consectetur nostrud dolor nostrud. Eiusmod veniam minim dolor cupidatat sit enim cupidatat ipsum do irure mollit ullamco. Quis cupidatat elit officia Lorem fugiat occaecat incididunt consequat minim.</p>
            </div>
        </div>
    )
}

export default NoteItem;