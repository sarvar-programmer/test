import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Module from "./Module";


import CoursImage from "../../assets/courses_image.png";
import Green_Image from "../../assets/green_shape.png";
import Time from "../../assets/time.png";
import House from "../../assets/house.png";
import Self from "../../assets/self-learning 1.png";
import Live from "../../assets/live-chat (1) 1.png";
import Planning from "../../assets/planning 1.png";
import Restange from "../../assets/Rectangle.png";

import "./About.css";

const modules = [
  {
    id: "modul1",
    title: "1-modul",
    lessons: [
      "Hello world dasturi",
      "If-else sharti",
      "For loop",
      "Array bilan ishlash",
      "Functionlar",
      "Hello world dasturi",
      "If-else sharti",
      "For loop",
      "Array bilan ishlash",
      "Functionlar",
    ],
  },
  {
    id: "modul2",
    title: "2-modul",
    lessons: [
      "Object tushunchasi",
      "DOM bilan ishlash",
      "React asoslari",
      "Component yaratish",
      "Props va State",
       "Object tushunchasi",
      "DOM bilan ishlash",
      "React asoslari",
      "Component yaratish",
      "Props va State",
    ],
  },
  {
    id: "modul3",
    title: "3-modul",
    lessons: [
      "API chaqirish",
      "Axios bilan ishlash",
      "React Router",
      "Authentication",
      "CRUD amallar",
      "API chaqirish",
      "Axios bilan ishlash",
      "API chaqirish",
      "Axios bilan ishlash",
    ],
  },
];




const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once:true -> faqat 1 marta ishlaydi
  }, []);

  return (
    <Container fluid className="p-4">
      {/* Header */}
      <Row className="my-5 mx-5">
        <Col md={7}>
          <motion.img
            src={CoursImage}
            alt="Java Backend"
            width={512}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </Col>
        <Col md={5} className="align-items-center d-flex">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="mt-3 display-2 fw-bold text-center">
              Java Backend <br /> kursi
            </h1>
          </motion.div>
        </Col>
      </Row>

      {/* Info section */}
      <Row className="mx-5 bg_custom bg_change">
        <Col md={4} className="col_left">
          <motion.img
            src={Green_Image}
            alt="?"
            width={281}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </Col>
        <Col
          md={3}
          className="d-flex flex-column justify-content-center"
          data-aos="fade-right"
        >
          <img src={Time} alt="?" width={64} />
          <h2 className="mt-3 courses_text_basic">Davomiyligi</h2>
          <p className="course_text color_t">6 oy</p>
        </Col>
        <Col
          md={5}
          className="d-flex flex-column justify-content-center"
          data-aos="fade-left"
        >
          <img src={House} alt="?" width={64} />
          <h2 className="mt-3 courses_text_basic">Onlayn</h2>
          <p className="course_text color_t">Hohlagan vaqtingizda</p>
        </Col>
      </Row>

      {/* Kursda nimani o‘rganasiz */}
      <Row className="mx-5 bg_change p-5 justify-content-between">
        <h1
          className="mb-5 display-3"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Kursda nimalar <br /> o’rganasiz
        </h1>

        <Col className="col_width mt-2" data-aos="zoom-in">
          <Card className="p-3 h-100 custom_shadow">
            <Card.Body className="d-flex flex-column">
              <Card.Title>
                <h4 className="text-center">Video darslarni ko’rib borish</h4>
              </Card.Title>
              <Card.Text>
                <p className="t_content text-center mt-3 color_t">
                  Talaba video darslarni onlayn ko’rib borish imkoniyatiga ega
                </p>
              </Card.Text>
              <Card.Text className="text-center mt-auto">
                <img src={Self} alt="?" width={222} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col_width mt-2" data-aos="zoom-in" data-aos-delay="200">
          <Card className="p-3 h-100 custom_shadow">
            <Card.Body className="d-flex flex-column">
              <Card.Title>
                <h4 className="text-center">Live chat da ishtirok etish</h4>
              </Card.Title>
              <Card.Text>
                <p className="t_content text-center mt-3 color_t">
                  Talabalar mahoratlarini oshirish maqsadida haftada 3 marta
                  online darslar tashkillashtirilgan
                </p>
              </Card.Text>
              <Card.Text className="text-center mt-auto">
                <img src={Live} alt="?" width={222} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col_width mt-2" data-aos="zoom-in" data-aos-delay="400">
          <Card className="p-3 h-100 custom_shadow">
            <Card.Body className="d-flex flex-column">
              <Card.Title>
                <h4 className="text-center">Amaliy mashg’ulotlar</h4>
              </Card.Title>
              <Card.Text>
                <p className="t_content text-center mt-3 color_t">
                  Kursimiz mobaynida berilgan darslar bo’yicha amaliy mashqlar
                  berib boriladi
                </p>
              </Card.Text>
              <Card.Text className="text-center mt-auto">
                <img src={Planning} alt="?" width={222} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <h1 className="mt-5">Kurs bo'yicha</h1>
      </Row>

      {/* Sertifikat bo‘limi */}
      <Row
        className="text-center mx-5"
        data-aos="fade-up"
      >
        <Col md={6} className="col_left">
           <img src={Restange} alt="?"/>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <p className="sertificat_title">Sertifikat kursni to‘liq tugatgandan so‘ng beriladi</p>
        </Col>
      </Row>
      
      <Row>
        <Module modules={modules}/>
      </Row>

    </Container>
  );
};

export default About;

