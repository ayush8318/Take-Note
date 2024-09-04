import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./component/Alert";
import { useState } from "react";
function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert al={alert}></Alert>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home  showalert={showalert}/>}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/login" element={<Login  showalert={showalert}/>}></Route>
              <Route exact path="/signup" element={<Signup  showalert={showalert}/>}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
     

  );
}

export default App;
