import React from 'react'
import '../styles/Login.css';
import {accessUrl} from '../spotify';

function Login() {
  return (
    <div className='login'>
    console.log("I HAVE A TOKEN ",token);
      {/* spotify logo */}
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt=""></img>
       {/* login with spotify button */}
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login;
