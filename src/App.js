import './App.css';
import Form from "./Form";
import {useEffect, useState} from "react";
import {uuid} from 'uuidv4';
import Card from "./Card";

function App() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7777/notes')
            .then(response => response.json())
            .then(notes => setNotes(notes))
    }, [])
    const addNewNote = (text) => {
        fetch('http://localhost:7777/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({text, id: uuid()})
        })
            .then(
                fetch('http://localhost:7777/notes')
                    .then(response => response.json())
                    .then(notes => setNotes(notes)))
    }

    const deleteNote = (id) => {
        fetch(`http://localhost:7777/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then(
            fetch('http://localhost:7777/notes')
                .then(response => response.json())
                .then(notes => setNotes(notes)))
    }

    const refreshNotes = (id) => {
        fetch('http://localhost:7767/notes')
            .then(response => response.json())
            .then(notes => setNotes(notes))
    }

    return (
        <div className="App">
            <h1>Notes <span className='refresh' onClick={refreshNotes}>&#8635;</span></h1>
            <Form addNewNote={addNewNote}/>
            {notes.map(e => <Card key={e.id} id={e.id} text={e.text} deleteNote={deleteNote}/>)}
        </div>
    );
}

export default App;
