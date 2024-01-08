import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import * as api from '../../api/index';
import {useNavigate} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();



  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/product/search?q=${query}`);
      if (response.data.success === true) {
        e.preventDefault();
        navigate(`/urunler/search?q=${query}`);
      } else {
        toast.error("Arama Sonucu Bulunamadi", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Arama Sonucu Bulunamadi", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    setQuery("");
  };

  return (
    <div>
      <Form onSubmit={handleSearch} className="d-flex">
        <Form.Control
          type="search"
          placeholder="Ürün Arayın"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type='submit' className="navbar-button" >
          Ara
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Search;
