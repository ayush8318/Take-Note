import React, { useState } from 'react';
import{ useNavigate }from 'react-router-dom'
const Login =(props) => {
let navigate=useNavigate();
    const [ credentials, setCredentials] = useState({email:"",password:""});
    const handleSubmit=async(e)=>{
e.preventDefault();
const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",  
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: credentials.email,password:credentials.password}) 
  });
  const  json=await response.json();
  console.log(json);
  if(json.success)
    {
        // save the auth token and redirect
        localStorage.setItem('token',json.authtoken);
        // for redirect we use history hook and now usehistory is replaced by usenavigate  
       navigate ("/");
       props.showalert("Logged in","Success");
    }
    else{
      props.showalert("Invalid Details","danger");
       
    }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
          }

  return (
    <div className="my-2">
      <h2>Login to iNotebook</h2>
      <form onSubmit={handleSubmit}>
  <div className="my-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control"  value={ credentials.email} onChange={onChange} id="email"  name="email"aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={ credentials.password} onChange={onChange}  id="password" name="password"/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  );
}

export default Login;
