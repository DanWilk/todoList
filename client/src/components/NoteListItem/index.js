import React, {useState} from "react";
// import {useParams} from "react-router-dom";
import NoteItem from "../NoteItem";

const NoteListItem = () => {

    const [todoList, setTodoList] = useState([]);

    const loadTodos = async () => {

        console.log(todoList)
        // if(todoList.length <= 0) {
        //     return;
        // }

        // let {id} = useParams();

            await fetch(`http://localhost:3001/api/user${window.location.pathname}`)
            .then(response => response.json())
            .then(dbUserData => {
                console.log(dbUserData);
                // setTodoList(dbUserData);
                // console.log(todoList);
            })
            .catch(err => console.log(err))
    }

    loadTodos();
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