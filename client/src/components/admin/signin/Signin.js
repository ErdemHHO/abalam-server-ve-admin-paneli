
import React, { useState } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';


import {useDispatch} from 'react-redux'
import {adminSignin} from '../../../actions/adminAuth'
import {useNavigate} from 'react-router-dom' 

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const dispatch=useDispatch();
  const navigate=useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(adminSignin(formData, navigate));
      if (response && response.success) {
        toast.success(response.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      } else {
        toast.error(response.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="login-box">
        <h3 className='h3'>Abalam Türkiye Admin Paneli</h3>
        <h2>Giriş Yapın</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 user-box" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              className="userInput p-2" 
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          
          <Form.Group className="mb-3 user-box" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Şifre"
              name="password"
              className="userInput p-2"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button className='login-box-a' type="submit"  disabled={!formData.email || !formData.password} onClick={handleSubmit}>
              Giriş Yap
          </Button>
        </Form>
        <ToastContainer />
      </div>   
    </div>
  );
}

export default Signin;
