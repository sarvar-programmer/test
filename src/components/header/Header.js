import React, { useState } from "react";
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { translations } from '../../details/translations'
import { FaChevronDown, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from '../../image/logo.png'
import uzb from '../../image/image.png'
import rus from '../../image/image (2).png'
import eng from '../../image/image (3).png'
import '../../css/header.css'

export default function Header() {
    const [lang, setLang] = useState("uz");
    const t = translations[lang];

    return (
        <>
            <Navbar className="navbar">
                <Container fluid className="custom">
                    <img src={logo}
                        className="d-inline-block align-top brand_logo"
                        alt="Library Logo" />
                    <Navbar.Brand href="#home" className="text-white brand_name" as={Link} to="/">{t.district}<br />{t.center}<br />{t.name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className=" nav_links">
                            <Nav.Link href="#home" className="text-white home" as={Link} to="/">{t.home}</Nav.Link>
                            <Nav.Link href="#link" className="text-white" as={Link} to="/news">{t.news}
                            </Nav.Link>
                            <Nav.Link href="#link" className="text-white" as={Link} to="/books">{t.books}</Nav.Link>
                            <NavDropdown className="infos" title={<span style={{ color: 'white' }}>{t.info}<FaChevronDown className="chevron" size={12}></FaChevronDown></span>} >
                                <Nav.Link href="#link" className="text-white link" as={Link} to="/akm">AKM haqida</Nav.Link>
                                <Nav.Link href="#link" className="text-white link"  as={Link} to="/rahbariat">Rahbariyat</Nav.Link>
                            </NavDropdown>
                        </Nav>
                        <div className="languages">
                            <NavDropdown title={<span className="lang"><img src={uzb} alt="uzb" className="text-white me-2 flag" />O'zbekcha<FaChevronDown className="text-white  chevron" size={12}></FaChevronDown></span>} className="text-white custom-nav-dropdown" >
                                <NavDropdown.Item onClick={() => setLang("uz")} href="#action/3.1" className="text-white custom-item"><img src={uzb} className="national_flag" alt="uzb"/>O'zbekcha</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setLang("ru")} href="#action/3.2" className="text-white custom-item">
                                    <img src={rus} className="rus_flag" alt="rus"/> Русский
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setLang("en")} href="#action/3.3" className="text-white custom-item"><img src={eng} className="national_flag" alt="eng"
                                />English</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className="user">
                            <FaUser  color="white" className="icon" />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

