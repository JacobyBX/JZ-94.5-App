import { useEffect, useState } from "react";
import '../App.css';

const Login = () => {

    return ( 
    
      <>    
      <button className="signIN" onClick={(e) => {window.open('http://localhost:5500/auth/google', '_self')}}><p>Sign in with Google</p></button>
      </>
    );
  }
  
  export default Login;