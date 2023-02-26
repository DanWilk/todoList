import React from "react";
import NoteListItem from '../../components/NoteListItem';
import NoteEditor from '../../components/NoteEditor';
import auth from "../../utils/auth";

const Dashboard = () => {
    if(!auth.loggedIn()) {
        window.location.assign("/")
    } else {
    return (
    <main>
        <NoteListItem/>
        <NoteEditor/>
    </main>
    )
    }
}

export default Dashboard;