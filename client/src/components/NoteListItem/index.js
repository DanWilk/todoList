import React from "react";
import NoteItem from "../NoteItem";

const NoteListItem = () => {
    let array = [1, 2, 3, 4, 5]

    return (
        <section className="itemListContainer">
            {array.map((item, i) => {
                return <NoteItem key={i}/>
            })}
        </section>
    )
}

export default NoteListItem;