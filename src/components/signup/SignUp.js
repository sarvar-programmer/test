import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Card,
} from "react-bootstrap";
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../login/Header";
import SignIn from "../../assets/signin.jpg";
import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();

  // Password show states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form states
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // Validation states
  const [phoneValid, setPhoneValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(null);
  const [firstNameValid, setFirstNameValid] = useState(null);
  const [lastNameValid, setLastNameValid] = useState(null);
  const [checkboxError, setCheckboxError] = useState("");

  // Refs
  const passwordRef = useRef();
  const confirmRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const checkboxRef = useRef();

  const validateInput = (value, type) => {
    const phoneRegex = /^\+998\d{9}$/;
    const passwordRegex = /^.{5,}$/;
    const nameRegex = /^[A-Z][a-z]+$/;

    switch (type) {
      case "phone":
        setPhone(value);
        setPhoneValid(value.length === 0 ? null : phoneRegex.test(value));
        break;
      case "password":
        setPassword(value);
        setPasswordValid(value.length === 0 ? null : passwordRegex.test(value));
        setConfirmPasswordValid(
          confirmPassword.length ? value === confirmPassword : null
        );
        break;
      case "confirm":
        setConfirmPassword(value);
        setConfirmPasswordValid(value.length === 0 ? null : value === password);
        break;
      case "first":
        setFirstName(value);
        setFirstNameValid(value.length === 0 ? null : nameRegex.test(value));
        break;
      case "last":
        setLastName(value);
        setLastNameValid(value.length === 0 ? null : nameRegex.test(value));
        break;
    }
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef && nextRef.current) nextRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const phoneRegex = /^\+998\d{9}$/;
    const passwordRegex = /^.{5,}$/;
    const nameRegex = /^[A-Z][a-z]+$/;

    if (!phoneRegex.test(phone)) {
      setPhoneValid(false);
      hasError = true;
    }
    if (!passwordRegex.test(password)) {
      setPasswordValid(false);
      hasError = true;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordValid(false);
      hasError = true;
    }
    if (!nameRegex.test(firstName)) {
      setFirstNameValid(false);
      hasError = true;
    }
    if (!nameRegex.test(lastName)) {
      setLastNameValid(false);
      hasError = true;
    }
    if (!isChecked) {
      setCheckboxError("Saytdan foydalanish shartlariga rozilik bildiring!");
      hasError = true;
    }

    if (!hasError) navigate("/profile?section=allCourses");
  };

  // Helper function for border color
  const getBorderColor = (valid) => {
    if (valid === null) return "#8f8f8f"; // default gray
    if (valid === true) return "green";
    return "red";
  };

  return (
    <>
      <Header />
      <Container fluid className="signup-page bg-white">
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={6} className="d-flex justify-content-center">
            <Card className="p-4 shadow-sm form w-75">
              <h4 className="text-center registr_title">Ro’yxatdan o’tish</h4>
              <Form onSubmit={handleSubmit}>
                {/* Telefon */}
                <Form.Group className="mb-3 inputs">
                  <Form.Control
                    type="text"
                    placeholder="+998"
                    value={phone}
                    onChange={(e) => validateInput(e.target.value, "phone")}
                    onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                    style={{
                      border: "none",
                      borderBottom: `2px solid ${getBorderColor(phoneValid)}`,
                    }}
                  />
                  {phoneValid === false && (
                    <p className="text-danger small mt-1">
                      Telefon raqam noto‘g‘ri formatda! Masalan: +998901234567
                    </p>
                  )}
                </Form.Group>

                {/* Parol */}
                <Form.Group className="mb-4 inputs position-relative">
                  <Form.Control
                    ref={passwordRef}
                    type={showPassword ? "text" : "password"}
                    placeholder="Parol"
                    value={password}
                    onChange={(e) => validateInput(e.target.value, "password")}
                    onKeyDown={(e) => handleKeyDown(e, confirmRef)}
                    style={{
                      border: "none",
                      borderBottom: `2px solid ${getBorderColor(passwordValid)}`,
                    }}
                  />
                  <span className="position-absolute mt-3"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      right: "10px",
                      // top: "-5%",
                      transform: "translateY(-180%)",
                      cursor: "pointer",
                      color: passwordValid === false ? "red" : "#6c757d",
                    }}
                  >
                    {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                  </span>
                  {passwordValid === false && (
                    <p className="text-danger small mt-1">
                      Parol kamida 5 ta belgidan iborat bo‘lishi kerak!
                    </p>
                  )}
                </Form.Group>

                {/* Parol tasdiqi */}
                <Form.Group className="mb-4 inputs position-relative">
                  <Form.Control
                    ref={confirmRef}
                    placeholder="Parol tasdig’i"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => validateInput(e.target.value, "confirm")}
                    onKeyDown={(e) => handleKeyDown(e, firstNameRef)}
                    style={{
                      border: "none",
                      borderBottom: `2px solid ${getBorderColor(confirmPasswordValid)}`,
                    }}
                  />
                  <span className="position-absolute mt-3"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                      right: "10px",
                      transform: "translateY(-170%)",
                      cursor: "pointer",
                      color: confirmPasswordValid === false ? "red" : "#6c757d",
                    }}
                  >
                    {showConfirmPassword ? (
                      <FaEye size={20} />
                    ) : (
                      <FaEyeSlash size={20} />
                    )}
                  </span>
                  {confirmPasswordValid === false && (
                    <p className="text-danger small mt-1">Parol tasdiqi mos emas!</p>
                  )}
                </Form.Group>

                {/* Ism */}
                <Form.Group className="mb-4 inputs">
                  <Form.Control
                    ref={firstNameRef}
                    type="text"
                    placeholder="Ismingizni kiriting"
                    value={firstName}
                    onChange={(e) => validateInput(e.target.value, "first")}
                    onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
                    style={{
                      border: "none",
                      borderBottom: `2px solid ${getBorderColor(firstNameValid)}`,
                    }}
                  />
                  {firstNameValid === false && (
                    <p className="text-danger small mt-1">
                      Ism faqat bosh harf va qolgan harflar kichik bo‘lishi kerak!
                    </p>
                  )}
                </Form.Group>

                {/* Familiya */}
                <Form.Group className="mb-5 inputs">
                  <Form.Control
                    ref={lastNameRef}
                    type="text"
                    placeholder="Familiyangizni kiriting"
                    value={lastName}
                    onChange={(e) => validateInput(e.target.value, "last")}
                    onKeyDown={(e) => handleKeyDown(e, checkboxRef)}
                    style={{
                      border: "none",
                      borderBottom: `2px solid ${getBorderColor(lastNameValid)}`,
                    }}
                  />
                  {lastNameValid === false && (
                    <p className="text-danger small mt-1">
                      Familiya faqat bosh harf va qolgan harflar kichik bo‘lishi kerak!
                    </p>
                  )}
                </Form.Group>

                {/* Checkbox */}
                <Form.Group className="mb-4">
                  <Form.Check
                    ref={checkboxRef}
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => {
                      setIsChecked(e.target.checked);
                      if (e.target.checked) setCheckboxError("");
                    }}
                    label={
                      <>
                        Saytdan foydalanish{" "}
                        <a href="/terms" className="term text-decoration-none">
                          shartlariga
                        </a>{" "}
                        roziman
                      </>
                    }
                  />
                  {checkboxError && (
                    <p className="text-danger small mt-1">{checkboxError}</p>
                  )}
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 fw-semibold btn-success mb-3 registr_btn"
                >
                  Ro’yxatdan o’tish
                </Button>

                <div className="text-center mt-3">
                  <small className="text-secondary d-block mb-3">
                    Men allaqachon ro’yxatdan o’tganman
                  </small>
                  <Link to="/login" className="fw-bold text-decoration-none access_link">
                    Kirish
                  </Link>
                </div>
              </Form>
            </Card>
          </Col>

          <Col md={6} className="text-center img_part">
            <Image src={SignIn} alt="sign up" className="img-fluid signup_image" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
