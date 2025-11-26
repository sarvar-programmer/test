import { Container, Row, Col, Image } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/logo.jpg";
import Instagram from "../../assets/instagram.png";
import "./Footer.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function Footer() {

    useEffect(() => { 
        AOS.init({ duration: 600, once: true }); 
    }, []);

    return (
        <Container fluid className="footer">
            <Row className="align-items-center text-center text-md-start g-3" data-aos="fade-up">
                
                {/* Logo */}
                <Col xs={1} sm={1} md={1} className="mb-3 mb-sm-0">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Image src={Logo} className="footer_logo" roundedCircle />
                    </motion.div>
                </Col>
                
                {/* Content */}
                <Col xs={11} sm={5} md={6} className="footer_content mb-3 mb-sm-0">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                        <p>Kurslar</p>
                        <p>Akademy , 2024 - barcha huquqlar himoyalangan.</p>
                    </motion.div>
                </Col>
                
                {/* Social Icons */}
                <Col xs={11} sm={5} md={4} className="d-flex justify-content-center justify-content-md-end gap-3 icons p-0">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="d-flex gap-3">
                        <FaFacebook className="text-primary social_network"/>
                        <Image src={Instagram} className=" instagram social_network"/>
                        <FaLinkedin className="linkedin social_network"/>
                        <FaTelegram className="text-primary social_network"/>
                        <FaYoutube className="text-danger social_network"/>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
}
