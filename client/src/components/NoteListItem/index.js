import React, {useEffect, useState, useRef} from "react";
// import {useParams} from "react-router-dom";
import NoteItem from "../NoteItem";

const NoteListItem = () => {

    const [todoList, setTodoList] = useState([]);

    const datahasLoaded = useRef(0);
    useEffect(() => {
        datahasLoaded.current = datahasLoaded.current + 1;
    });

    const loadTodos = async (dataHasLoaded) => {

        console.log(todoList)

            await fetch(`http://localhost:3001/api/user${window.location.pathname}`)
            .then(response => response.json())
            .then(dbUserData => {
                if(datahasLoaded < 1) {
                    console.log(dbUserData);
                    setTodoList(dbUserData);
                }
            })
            .catch(err => console.log(err))
    }

    loadTodos(datahasLoaded);
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