import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "./Header";
import SignIn from "../../assets/signin.jpg";
import "../login/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);

  const passwordRef = useRef(null);

  const phoneRegex = /^\+998\d{9}$/;
  const passwordRegex = /^.{5,}$/;

  const handleLogin = (e) => {
    e.preventDefault();

    let valid = true;

    if (!phoneRegex.test(phone)) {
      setPhoneError("Telefon raqam noto‘g‘ri formatda! Masalan: +998901234567");
      setIsPhoneValid(false);
      valid = false;
    } else {
      setPhoneError("");
      setIsPhoneValid(true);
    }

    if (!passwordRegex.test(password)) {
      setPasswordError("Parol kamida 5 ta belgidan iborat bo‘lishi kerak!");
      setIsPasswordValid(false);
      valid = false;
    } else {
      setPasswordError("");
      setIsPasswordValid(true);
    }

    if (valid) {
      navigate("/profile");
    }
  };

  // 🔹 Yozish paytida tekshirish
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    if (value === "") {
      setIsPhoneValid(null);
      setPhoneError("");
    } else if (phoneRegex.test(value)) {
      setIsPhoneValid(true);
      setPhoneError("");
    } else {
      setIsPhoneValid(false);
      setPhoneError("Telefon raqam noto‘g‘ri formatda!");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value === "") {
      setIsPasswordValid(null);
      setPasswordError("");
    } else if (passwordRegex.test(value)) {
      setIsPasswordValid(true);
      setPasswordError("");
    } else {
      setIsPasswordValid(false);
      setPasswordError("Parol kamida 5 ta belgidan iborat bo‘lishi kerak!");
    }
  };

  // 🔹 Enter bosilganda keyingi inputga o‘tadi
  const handlePhoneKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      passwordRef.current.focus();
    }
  };

  return (
    <>
      <Header />
      <Container fluid className="bg-white d-flex">
        <Row className="flex-grow-1 w-100 align-items-center justify-content-center">
          <Col md={6} className="d-flex justify-content-center form_col">
            <div className="form_div">
              <h4 className="text-center login_title">Tizimga kirish</h4>
              <Form onSubmit={handleLogin}>
                {/* Telefon */}
                <Form.Group controlId="formPhone" className="login_phone mb-3">
                  <Form.Control
                    type="text"
                    placeholder="+998"
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    className={`border-0 border-bottom rounded-0 shadow-none phone_inp ${
                      isPhoneValid === false
                        ? "error-border"
                        : isPhoneValid === true
                        ? "success-border"
                        : ""
                    }`}
                  />
                  {phoneError && (
                    <p className="text-danger small mt-1">{phoneError}</p>
                  )}
                </Form.Group>

                {/* Parol */}
                <Form.Group
                  controlId="formPassword"
                  className="login_password mb-3"
                >
                  <div className="position-relative">
                    <Form.Control
                      ref={passwordRef}
                      type={showPassword ? "text" : "password"}
                      placeholder="Parol"
                      value={password}
                      onChange={handlePasswordChange}
                      className={`border-0 border-bottom rounded-0 shadow-none password_inp ${
                        isPasswordValid === false
                          ? "error-border"
                          : isPasswordValid === true
                          ? "success-border"
                          : ""
                      }`}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#555",
                      }}
                    >
                      {showPassword ? <FaEye size={20}/> : <FaEyeSlash size={20}/>}
                    </span>
                  </div>
                  {passwordError && (
                    <p className="text-danger small mt-1">{passwordError}</p>
                  )}
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 mb-2 login_btn btn-success"
                >
                  Kirish
                </Button>

                <div className="text-center">
                  <a
                    href="#"
                    className="text-secondary text-decoration-none d-block recovery"
                  >
                    Parolingizni unutdingizmi?
                  </a>
                  <span className="text-secondary new_user d-block">
                    Yangi foydalanuvchimisiz?
                  </span>

                  <Link
                    to="/signup"
                    className="fw-bold text-decoration-none signup"
                  >
                    Ro’yxatdan o’tish
                  </Link>
                </div>
              </Form>
            </div>
          </Col>

          <Col
            md={6}
            className="text-center justify-content-center align-items-center part_two"
          >
            <Image
              src={SignIn}
              alt="sign in"
              className="object-fit-cover  login_img"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
