import React, { useState } from "react";


const Login = ({SignHandler}) => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [checkbox,setCheckbox] = useState("")

  const submitHandaler = (e)=>{
    e.preventDefault();

    console.log("user",{email,password})

    // reset the input field
    setEmail("");
    setPassword("");
    setCheckbox("")
  }

  const ShowbtnHandler2 = ()=>{
    SignHandler()

  }
  return (
    <>
      <div className="container-sm text-centre">
        <div className="row justify-content-center">
          <div className="col-6 mt-5 bg-border-rounded">
            <form  onSubmit={submitHandaler} className="form-control p-5">
              <div className="mb-3">
                <h3>Log-In Page</h3>
                <label id = "email" className="form-label">
                  Email address
                </label>
                <input
                  className="form-control"
                  aria-describedby="emailHelp"
                  type="email"
                  name ="email"
                  id = "email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label id = "password" className="form-label">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id = "password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox" 
                  id="checkbox"
                  value={checkbox}
                  onChange={(e)=>setCheckbox(e.target.value)}
                />
                <label className="form-check-label" id = "checkbox">
                  Remember
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <div className="mt-2 form-text ">
               <div onClick={ShowbtnHandler2} > I don't Have an Account </div>
              </div>

            </form>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
