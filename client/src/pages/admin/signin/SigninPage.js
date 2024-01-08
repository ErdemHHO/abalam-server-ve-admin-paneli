import React from 'react'
import Design from "./Design";
import "./Signin.css"
import { ToastContainer } from 'react-toastify';

import Signin from '../../../components/admin/signin/Signin';

import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom' 

function SigninPage() {
  const [user] = useState(JSON.parse(localStorage.getItem('adminProfile')));

  const navigate=useNavigate();

    useEffect(() => {
      if (user) {
      navigate("/admin");
      }
  }, []);

  return (
    <div>
        <div className="orta">
          <Signin />
        </div>
        <Design />
        <ToastContainer />
    </div>
  )
}

export default SigninPage