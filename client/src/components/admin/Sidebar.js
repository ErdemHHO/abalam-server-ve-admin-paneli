import React, { useEffect, useState } from "react";
import { ProductTable } from "./Content/ProductTable";
import CategoryTable from "./Content/CategoryTable";
import { Dashboard } from "./Content/Dashboard";
import AnnouncementTable from "./Content/AnnouncementTable";
import AdminTable from "./Content/AdminTable";
import { BsFillClipboardDataFill,BsFillBagCheckFill } from 'react-icons/bs'
import { BiCategory } from 'react-icons/bi'
import { AiTwotoneSound } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { GrUserAdmin } from 'react-icons/gr'
import {Button} from 'react-bootstrap'


import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';

import * as actionType from '../../constants/actionTypes.js';

function Sidebar() {


  const [user,setUser]=useState(JSON.parse(localStorage.getItem('AdminProfile')));


  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const logout = () => {
      dispatch({ type: actionType.ADMINLOGOUT });
  
      navigate('/signin');
  
      setUser(null);
  };
  

  const [activePage, setActivePage] = useState("dashboard");
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(<Dashboard />);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);

    // İstenilen içeriği burada belirleyebilirsiniz
    if (page === "kategoriler") {
      setContent(<CategoryTable />);
    } else if (page === "urunler") {
      setContent(<ProductTable />);
    } else if (page === "dashboard") {
      setContent(<Dashboard />);
    } else if (page === "duyurular") {
      setContent(<AnnouncementTable />);
    } else if (page === "admin yonetimi") {
      setContent(<AdminTable />);
    } else if (page === "cikis") {
      navigate("/");
    } else {
      setContent(null);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse mt-3">
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <button className={`nav-link ${activePage === "dashboard" ? "active" : ""}`} onClick={() => handlePageChange("dashboard")}>   
                    <span data-feather="shopping-cart" className="align-text-bottom mx-3"><BsFillClipboardDataFill size={24} /></span>
                    Dashboard
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${activePage === "kategoriler" ? "active" : ""}`} onClick={() => handlePageChange("kategoriler")}>
                    <span data-feather="shopping-cart" className="align-text-bottom mx-3"><BiCategory size={24} /></span>
                    Kategoriler
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${activePage === "urunler" ? "active" : ""}`} onClick={() => handlePageChange("urunler")}>
                    <span data-feather="file" className="align-text-bottom mx-3"><BsFillBagCheckFill size={24} /></span>
                    Ürünler
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${activePage === "duyurular" ? "active" : ""}`} onClick={() => handlePageChange("duyurular")}>
                    <span data-feather="file" className="align-text-bottom mx-3"><AiTwotoneSound size={24} /></span>
                    Duyurular
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${activePage === "admin yonetimi" ? "active" : ""}`} onClick={() => handlePageChange("admin yonetimi")}>
                    <span data-feather="file" className="align-text-bottom mx-3"><GrUserAdmin size={24} /></span>
                    Admin Yönetimi
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link"  onClick={logout} >
                    <span data-feather="file" className="align-text-bottom mx-3"><FiLogOut size={24} /></span>
                    Çıkış Yap
                  </button>
                </li>
                {/* Diğer menü öğeleri */}
              </ul>
            </div>
          </nav>
          <main className="">{content}</main>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
