import React, { useState } from "react";
import {Col,Badge,Row } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Module.css";
import Payme from '../../assets/payme.png';
import { useNavigate } from "react-router-dom";

const Module = ({modules}) => {
     const [activeModule, setActiveModule] = useState(modules[0].id);
     const currentLessons = modules.find((m) => m.id === activeModule)?.lessons || [];
     const [selectedCourses, setSelectedCourses] = useState([]);
     const [totalPrice, setTotalPrice] = useState(0);
     const navigate = useNavigate(); 

     const handleClick = () => {
      navigate("/payment");
    };
    // ...***

  const courses = [
    { id: 1, name: "HTML/CSS", price: 500000 },
    { id: 2, name: "JavaScript", price: 600000 },
  ];

  const handleSelect = (course) => {
    let updatedCourses;
    if (selectedCourses.includes(course.id)) {
      updatedCourses = selectedCourses.filter((id) => id !== course.id);
      setTotalPrice(totalPrice - course.price);
    } else {
      updatedCourses = [...selectedCourses, course.id];
      setTotalPrice(totalPrice + course.price);
    }
    setSelectedCourses(updatedCourses);
  };

    return(
        <>
          <Col className="bg_module bg_change m-5 p-5">
            <h1 className="mx-4">
                Kurs bo'yicha
            </h1>
            <div className="d-flex">
                {modules.map((modul) => (
                    <h3
                    key={modul.id}
                    className="me-2 mb-2 mx-4 mt-3 cursor-pointer"
                    onClick={() => setActiveModule(modul.id)}
                    >
                        {modul.title}
                    </h3>
                ))}
            </div>
            <div className="mt-4 mx-4 child_bottom">
            { currentLessons.map((lesson,index) => (
                <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5,delay: index * 0.1 }}
                key={index} className="d-flex align-items-center border_custom" action>
                    <p className="d-inline-flex align-items-center">
                       <Badge bg="dark" className="me-3 badge_custom">
                       {index + 1}
                       </Badge>
                    </p>
                    <p><span className="bg_span">{lesson}</span></p>
                </motion.div>
            ))}
            </div>

            <Row className="mt-5 pt-5">
                <Col md={6} className="pe-5">
                <div className="bg-white p-4 h-100">
                    <h1 className="fw-bold">KURSNI<br />SOTIB OLISH</h1>
          <hr className="w-75"/>
          {courses.map((course) => (
            <div>
            <div className="form-check mb-3 d-flex align-items-center" key={course.id} style={{ userSelect: "none" }}>
              <input
                type="checkbox"
                className="form-check-input"
                id={course.id}
                checked={selectedCourses.includes(course.id)}
                onChange={() => handleSelect(course)}
              />
              <label className="form-check-label ms-3" htmlFor={course.id}>
                {course.name} <br></br> <b>{course.price.toLocaleString()} so’m</b>
              </label>
            </div>
            <hr className="w-50 d-block"/>
            </div>
          ))}
                </div>

                </Col>
                <Col md={6} className="px-4">
                <div className="p-4">
             <h5 className="fw-bold">To‘lov turi</h5>
          <div className="border p-2 mb-4 w-25 border-success">
            <p className="small mt-2 mb-0">Payme orqali <br></br> to‘lang</p>
            <img
              src={Payme}
              alt="Payme"
              width="100"
            />
          </div>

          <h4 className="fw-bold text-end">Kurs narxi</h4>
          <h4 className="mb-3 text-end">{totalPrice.toLocaleString()} SO’M</h4>
          <hr className="mt-4"/>

          <button className="btn btn-success w-25 mt-2 fw-bold" onClick={handleClick}>
            Xarid qilish
          </button>
        </div>
                </Col>
            </Row>
          </Col>
        </>
    )

}

export default Module;