import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import * as api from "../../api/index";
import Menu from "./Menu";
import Search from "./Search";

function Header() {
  const navigate = useNavigate();
  const myComponentStyles = {
    display: "block",
    width: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "10",
    backgroundColor: "#fff",
    boxShadow: "0 4px 4px -2px rgba(0,0,0,0.2), 0 2px 8px 0 rgba(0,0,0,0.14), 0 6px 10px 0 rgba(0,0,0,0.12)",
    marginTop: "50px",
    transition: "margin-top 0.4s ease-in-out",
  };
  const [myStyles, setMyStyles] = useState(myComponentStyles);
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getCategories = async () => {
      const response = await api.kategorileriGetir();
      setCategories(response.data.categories);
    };
    getCategories();
    function handleScroll() {
      const newStyles = {
        ...myComponentStyles,
        marginTop: window.scrollY > 30 ? "0px" : "45px",
      };
      setMyStyles(newStyles);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={myStyles}>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src="/images/logo/abalam-logo2.png" alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle className="navbarToggle" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="navbar-link fw-semibold">
                <Link to="/" className="link-without-underline">
                  Anasayfa
                </Link>
              </Nav.Link>
              <Nav.Link className="navbar-link fw-semibold">
                <Link to="/hakkimizda" className="link-without-underline">
                  Hakkımızda
                </Link>
              </Nav.Link>
              <Nav.Link className="navbar-link fw-semibold">
                <Link to="/iletisim" className="link-without-underline">
                  İletişim
                </Link>
              </Nav.Link>
              <li className="nav-item dropdown fw-semibold">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  Ürünlerimiz
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item">
                    <Link to="/urunler" className="link-without-underline">
                      Tüm Ürünler
                    </Link>
                  </a>
                  {categories &&
                    categories.map((item) => (
                      
                        <Link key={item._id}  to={`/urunler/${item.slug}`} className="link-without-underline">
                          <span className="dropdown-item">
                          {item.name}
                          </span>
                        </Link>
                      
                    ))}
                </div>
              </li>
            </Nav>
            <Search />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Menu />
    </div>
  );
}

export default Header;
