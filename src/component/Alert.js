import React from 'react'
 
function Alert(props) {
   const capitalize=(string)=>{
    if(string==="danger")
      {
        string="Error"
      }
       let lower=string.toLowerCase();
       return lower.charAt(0).toUpperCase()+lower.slice(1);
   }
  return (
   <div style={{height:'52px'}}>
     {props.al&&  <div className={`alert alert-${props.al.typ} alert-dismissible fade show`} role="alert">
   <strong> {capitalize(props.al.typ)}</strong>:  {props.al.msg}
   {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
 </div>}
 </div>
 
  )
}

export default Alert
