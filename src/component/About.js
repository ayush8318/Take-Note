import React from 'react'
 
export default function About(props) {
   
 let  mystyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
  } 
  return (
    
      <>
      <div className="container my-3">
      <h1 style={{ color:props.mode==='dark'?'white':'#042743',}}>About Us</h1>
      <div className="accordion container  "  id="accordionExample">

<div className="accordion-item">
<h2 className="accordion-header">
  
  <button className="accordion-button"   style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
   How iNotebook is build?
  </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
  <div className="accordion-body">
  iNoteBook is a powerful note-taking application built using HTML, JavaScript, and React. To enhance the application's performance and maintainability, we utilize Context API to avoid prop drilling, ensuring a smoother and more efficient data flow. Additionally, we adhere to the Model-View-Controller (MVC) architecture to increase code understandability and maintain a clear separation of concerns, making the codebase more organized and easier to manage.


  </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
  <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
    Free to use 
  </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
  <div className="accordion-body">
  iNoteBook is a free note-saving application that allows you to securely save your notes.
  </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
  <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
   Encryption Method
  </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
  <div className="accordion-body">
  iNotebook secures communication between the server and client using JWT (JSON Web Token) technology. This ensures that data exchanged between the server and client is encrypted and authenticated, maintaining confidentiality and integrity throughout the communication process.
  </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
  <button className="accordion-button collapsed"   style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
     Browser compatible
  </button>
</h2>
<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
  <div className="accordion-body">
     This iNoteBook application works in any web browser suchs as Chrome,FireFox,Sfari,Internet Explorer. 
</div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
  <button className="accordion-button collapsed"   style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
     DataBase Technology
  </button>
</h2>
<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
  <div className="accordion-body">
  iNotebook uses MongoDB as its primary database technology, employing Mongoose and schemas for object modeling within the Node.js environment. This approach ensures efficient and structured storage of user data, facilitating scalability and flexibility in securely managing notes.


</div>
</div>
</div>

      </div>
       </div>
    </>

  )
  }



