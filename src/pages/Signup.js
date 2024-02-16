import React, { useState } from 'react';

const Signup = ({loginHandlar}) => {

  const [fname,setFname] =useState("");
  const [lname,setLname]= useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword]= useState("");

  const submitHandlar = (e)=>{
     e.preventDefault();
     // send the data in backend 
     console.log( "form submited",{fname,lname,phone,email,password})
     console.log("cliked")
    
     // reset the fields
     setFname("");
     setLname("");
     setPhone("");
     setEmail("");
     setPassword("");
  }

  const ShowbtnHandler = ()=>{
    console.log("clicked")
    loginHandlar();
    

  }
  return (
    <>
    <div className="container-sm text-centre">
    <div className="row justify-content-center">
      <div className="col-6 mt-5 bg-border-rounded">
        <form onSubmit={submitHandlar} className="form-control p-5">
          <div className="mb-3">
            <h3>Sign-Up Page</h3>
            <label id ="fname" className="form-label">
             First Name
            </label>
            <input
              type="text"
              name='fname'
              className="form-control"
              id="fname"
              aria-describedby="emailHelp"
              value={fname}
              onChange={(e)=>setFname(e.target.value)}
              required
            />
            <label id= "lname" className="form-label">
            Last Name
           </label>
           <input
             type="text"
             name='lname'
             className="form-control"
             id="lname"
             aria-describedby="emailHelp"
             value={lname}
             onChange={(e)=>setLname(e.target.value)}
             required
           />
           <label id="phone" className="form-label">
           phone Number
          </label>
          <input
            type="Number"
            name='phone'
            placeholder='+91'
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
          />
            <label id="email"  className="form-label">
              Email address
            </label>
            <input
              type="email"
              name='email'
              className="form-control"
              id="email1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div id= "password" className="mb-3">
            <label  className="form-label">
              Password
            </label>
            <input
              type="password"
              name='password'
              className="form-control"
              id="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
            />
          </div>
        
          <button type="submit" className="btn btn-primary" >
            Signup
          </button>
          <div className="mt-2 form-text ">
             <div onClick={ShowbtnHandler} > I Have an Account </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    </>
  )
}

export default Signup