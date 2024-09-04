import React, { useContext,useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = (props) => {
  const context=useContext(noteContext);
  const {addNote}=context;
  const[note,Setnote]=useState({title:"",description:"",tag:""})
  const handleclick=(e)=>{
    e.preventDefault();//using this page not reload while clciking on submit button
addNote(note.title,note.description,note.tag);
props.showalert(" Note Added","success");
Setnote({title:"",description:"",tag:""});
  }
  const onChange=(e)=>{
Setnote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div className="container my-3">
      <h2>Add your Notes</h2>
      <form className="my-3">
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title}onChange={onChange}  />
    
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description"  value={note.description}onChange={onChange}  />
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
  </div>
  <button  disabled={note.title.length<5||note.description.length<5}type="submit" className="btn btn-primary" onClick={handleclick}>AddNote</button>
</form>
</div>
  );
}

export default AddNote;
