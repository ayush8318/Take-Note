import React, { useContext, useEffect,useRef,useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitems from "./Noteitems";
 import AddNote from'./AddNote'
 import{ useNavigate }from 'react-router-dom'
// for modal to toggle  we use useRef react hook
// with the ref we give ref to other element example in modal we dont want to show the button we do thi programatically so we did the with help of ref
const Notes = (props) => {
  let navigate=useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes,editNote} = context; 
  useEffect(()=>{
    if(localStorage.getItem('token')){ getNotes();}

  else
  {  navigate ("/login");}

    //  eslint-disable-next-line
  },[])

  const[note,Setnote]=useState({id:"",etitle:"",edescription:"",etag:""})
  const ref=useRef(null);
  const refclose=useRef(null);
  const updateNote=(currnote)=>{
ref.current.click();
console.log (currnote.tag);
Setnote({id:currnote._id,etitle:currnote.title,edescription:currnote.description,etag:currnote.tag})
  }
  
  
  const handleclick=(e)=>{
    // e.preventDefault();//using this page not reload while clciking on submit button in this not he part of form so need to use
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refclose.current.click();


  }
  const onChange=(e)=>{
Setnote({...note,[e.target.name]:e.target.value})
  }
  return (
  <>
  <AddNote showalert={props.showalert}/>
   {/* the below model is taken from bootstrap modal */}
     {/* ref={ref}by adding this in button we achieve our aim that we did programatically */}
     {/* <!-- Button trigger modal --> */}
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
 
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">EditNotes</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="container my-3">
       
      <form className="my-3">
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle"   name="etitle"  value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription"   name="edescription"  value={note.edescription} onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag"  name="etag"  value={note.etag}  onChange={onChange}/>
  </div>
   
</form>
</div>
      </div>
      <div className="modal-footer">
        <button  ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* the modal  is close by the close button but we want after editing on clicking update button then also modal get close for this we use ref we ref update button to close for this we create refclose  */}
        <button   disabled={note.etitle.length<5||note.edescription.length<5}  onClick={handleclick} type="button" className="btn btn-primary">UpdateNote</button>
      </div>
    </div>
  </div>
</div>
  <div className="row my-3">
    <h2>Your Notes</h2>
    <div className="container mx-2">
       {notes.length===0&&'No notes to display'}
    </div>
      {notes.map((note) => {
        return <Noteitems  key ={note._id} updateNote={updateNote} note={note} showalert={props.showalert}/>;
      })}
    </div>
  
  </>
   
  
  
  );
};

export default Notes;
