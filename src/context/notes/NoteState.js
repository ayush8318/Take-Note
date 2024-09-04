import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  // const s1={
  //     "name":"harry",
  //     "class":"5b"
  // }
  // const [state,setState]=useState(s1);
  // // we can also export function thru api context  this update fun and any func can pass and use  where required
  // const update=()=>{
  // setTimeout(()=>{
  //     setState({
  //         "name":"ayush",
  //         "class":"10c"
  //     })
  // },1000)
  // }
  // return (
  //     <NoteContext.Provider value={{state,update}}>
  //         {props.children}
  //     </NoteContext.Provider>
  // )
  const host = "https://take-note-zqoe.onrender.com";
  const initialnotes = [];
  const [notes, setNotes] = useState(initialnotes);
  //get all  all Notes
  const getNotes = async () => {
    //todo api call
    //url from fetchnote collection
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //auth token from addnote collection from thunder client
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log(json)
    setNotes(json);
  };
  //   const json= response.json();

  //add a Note
  const addNote = async (title, description, tag) => {
    //todo api call
    //url from addnote collection
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //auth token from addnote collection from thunder client
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));

    //push updates an array ,concat returns an array
  };

  // delete a note
  const deleteNote = async (id) => {
    //todo api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        //auth token from addnote collection from thunder client
        "auth-token": localStorage.getItem("token"),
      },
    });
    console.log(response);
    // const json= response.json();
    // console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // edit a note
  const editNote = async (id, title, description, tag) => {
    // api calls
    // the above fetch method copied from  google i.e. fetch with headers
    //url from update collection
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //auth token from updated collection from thunder client
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const json = response.json();
    console.log(response);

    // logic to edit inn client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
// when we are fetching the url and make the request from our server the cros policy error
// to fix this we google how to fix cors in express
// $ npm install cors in bakend after this installation go index.html of backend
// paste the below code
// var express = require('express')
// var cors = require('cors')
// var app = express()
// app.use(cors())
export default NoteState;
