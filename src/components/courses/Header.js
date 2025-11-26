import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaArrowCircleRight  } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/logo.jpg";
import "./Header.css"
import { useNavigate } from "react-router-dom";

// 1 solution

// function Header() {
//   return (
//     <Navbar expand="lg" bg="white" className="shadow-sm px-3 header-custom">
//       <Container fluid>
//         <Row className="w-100 align-items-center">
//           {/* Logo */}
//           <Col xs={4} md={3} className="d-flex align-items-center">
//             <Navbar.Brand href="#">
//               <img
//                 src={Logo}
//                 alt="Logo"
//                 className="me-2 img-c-h"
//               />
//               <span className="logo_name ms-3">SMART OLAM</span>
//             </Navbar.Brand>
//           </Col>

//           <Col xs={4} md={6} className="d-flex justify-content-end">
//             <Nav>
//               <Nav.Link href="#" className="about-course ms-5">
//                 Kurs haqida
//               </Nav.Link>
//             </Nav>
//           </Col>

//           <Col xs={4} md={3} className="d-flex justify-content-end">
//             <Nav>
//               <Nav.Link href="#" className="access d-flex align-items-center">
//                 <FaArrowCircleRight className="me-3" size={35}/> Kirish
//               </Nav.Link>
//             </Nav>
//           </Col>
//         </Row>
//       </Container>
//     </Navbar>
//   );
// }


// 2 solution

function Header() {

  const navigate = useNavigate(); 
  const navigateLogin = useNavigate();

  const handleClick = () => {
    navigate("/"); 
  };

  

  const handleClickL = () => {
    navigateLogin("/login");
  }

  return (
    <Navbar expand="lg" bg="white" className="shadow-sm px-3 header-custom">
      <Container fluid className="mx-3">
        {/* Logo and Toggle */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Logo"
            className="me-2 img-c-h"
          />
          <span className="logo_name ms-3" onClick={handleClick}>SMART OLAM</span>
        </Navbar.Brand>

        {/* Toggler mobil */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menyu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#" className="about-course mx-lg-5 my-2 my-lg-0 text-center">
              Kurs haqida
            </Nav.Link>

            <Nav.Link onClick={handleClickL}
              href="#"
              className="access d-flex align-items-center justify-content-center"
            >
              <FaArrowCircleRight className="me-2" size={40} /> Kirish
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
