import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import Logo from "../../assets/logo.jpg";
import "./header.css";
import HeaderCourses from "./HeaderCourses";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // scrollni o‘chiradi
    } else {
      document.body.style.overflow = "auto"; // scrollni qayta yoqadi
    }

    // Cleanup: component unmount bo‘lganda scroll tiklansin
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        data-aos="fade-down"
      >
        <Navbar
          expand="lg"
          bg="white"
          fixed="top"
          className="shadow-sm px-3 header-custom header"
        >
          <Container fluid className="mx-3 cont">
            <Navbar.Brand
              href="#home"
              className="d-flex align-items-center m-0"
              data-aos="fade-right"
            >
              <Image
                src={Logo}
                alt="Logo"
                roundedCircle
                className="me-2 logo"
              />
              <span className="brand_name ms-3">SMART OLAM</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="main-navbar" />

            <Navbar.Collapse id="main-navbar">
              <Nav className="align-items-lg-center">
                <Nav.Link
                  className="courses d-flex p-0"
                  onClick={() => setOpen(!open)}
                >
                  Kurslar{" "}
                  {open ? (
                    <FaChevronUp className="chevron ms-1" />
                  ) : (
                    <FaChevronDown className="chevron ms-1" />
                  )}
                </Nav.Link>
              </Nav>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="collapse_card"
                    data-aos="fade-up"
                  >
                    <HeaderCourses />
                  </motion.div>
                )}
              </AnimatePresence>

              <Nav
                className="ms-auto align-items-center navbar_right"
                data-aos="fade-left"
              >
                <Nav.Link className="license p-0">Litsenziya</Nav.Link>
                <div className="d-flex phone_part">
                  <BsTelephone className="m-0 phone_icon" />
                  <Nav.Link className="align-items-center justify-content-center p-0 phone">
                    +998999999999
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    </>
  );
}
