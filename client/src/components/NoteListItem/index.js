import React, {useEffect} from "react";
// import {useParams} from "react-router-dom";
import NoteItem from "../NoteItem";

const NoteListItem = () => {


    let data = [];
    useEffect(() => {
        loadTodos();
    });

    const loadTodos = async () => {


            await fetch(`http://localhost:3001/api/user${window.location.pathname}`)
            .then(response => response.json())
            .then(dbUserData => {
                    console.log(dbUserData);
                    data = dbUserData;
            })
            .catch(err => console.log(err))
    }

    // loadTodos(datahasLoaded);
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