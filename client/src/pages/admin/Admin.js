import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom' 
import "./Admin.css";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";


function Admin() {
  const [user] = useState(JSON.parse(localStorage.getItem('adminProfile')));

  const navigate=useNavigate();

    useEffect(() => {
      if (!user) {
      navigate("/signin");
      }
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default Admin;
