import React from "react";
import NoteListItem from '../../components/NoteListItem';
import NoteEditor from '../../components/NoteEditor';

const Dashboard = () => {

    return (
    <main>
        <NoteListItem/>
        <NoteEditor/>
    </main>
    )
}

export default Dashboard;