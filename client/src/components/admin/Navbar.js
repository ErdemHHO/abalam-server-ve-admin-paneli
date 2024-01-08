import React from "react";
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom' 

function Navbar() {
  const [user] = useState(JSON.parse(localStorage.getItem('adminProfile')));

  const navigate=useNavigate();

    useEffect(() => {
      if (!user) {
      navigate("/signin");
      }
  }, []);

  return (
    <div>
      <header className="navbar fontControl navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 " >Abalam Türkiye</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav">
          <div className="nav-item text-nowrap  ">
            <div className="nav-link fontControl px-3 mt-2">
            {user?.result ? (
                <h4> {user.result.adminName}  {user.result.adminSurname}</h4>
              ):(
                <h4> Giriş Yapınız</h4>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>

    
  );
}

export default Navbar;
