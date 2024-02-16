import React, { useState } from 'react';
import Signup from '../../pages/Signup';
import Login from '../../pages/Login';


const AuthLayout = () => {

  const [Islogin,setLogin]= useState(false);
  const [IsSign,setSign]= useState(true);

  const ShowLoginHandler = ()=>{
      setLogin(true)
      setSign(false)
  }
 
  const ShowSignupHandler = ()=>{
      setSign(true)
      setLogin(false)
  }
  return (
    <div>
       { Islogin && <Login SignHandler ={ ShowSignupHandler } />} 

       { IsSign && <Signup loginHandlar= {ShowLoginHandler}/> }    
    </div>
  )
}

export default AuthLayout;