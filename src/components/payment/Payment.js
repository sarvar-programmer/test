import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Payment.css";
import Payme from "../../assets/payme.png";

function Payment() {
  return (
    <div className="payment-page">
      <Card className="payment-wrapper shadow-sm">
        <Row>
          {/* Chap qism */}
          <Col lg={7} className="left-panel">
            <img src={Payme} alt="Payme" className="payme-logo mb-4" />

            <h5 className="section-title mb-4">Чек к оплате</h5>

            <div className="d-flex align-items-center mb-4 justify-content-around">
              <div className="pay-box">

              </div>
              <div className="qr-frame">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?data=payme-check"
                  alt="QR"
                />
              </div>
            </div>

            <div className="info-block mb-3">
              <p className="label">Номер заказа:</p>
              <p className="value text-break text-end">
                ferwwdko24534039920edo203020d2332
              </p>
            </div>

            <div className="info-block mb-2 d-flex align-items-center justify-content-between">
              <p className="label me-2 mb-0">Статус:</p>
              <Badge bg="danger" className="status-badge">
                Не оплачено
              </Badge>
            </div>

            <p className="date mb-2 text-end">14.10.24 13:34</p>

            <div className="d-flex justify-content-between">
              <p className="sum">
              Сумма платежа: 
              </p>
              <p>
                <b>680 000.00 сум</b>
              </p>
            </div>
      
          </Col>

          {/* O‘ng qism */}
          <Col lg={5} className="right-panel">
            <h6 className="section-title mb-3">Вход</h6>
            <Form>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className="label">Номер телефона</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+998 __ ___ __ __"
                  className="input"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className="label">
                  Пароль (минимум 6 символов)
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="******"
                  className="input"
                />
              </Form.Group>

              <Button className="btn-login w-100 mb-4">Войти</Button>

              <h6 className="section-title mb-3">Оплата без регистрации</h6>

              <Form.Group className="mb-3" controlId="formCard">
                <Form.Label className="label">Номер карты</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="card-icon">
                    <i className="bi bi-credit-card"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="3233 4231 2132 1212"
                    className="input"
                  />
                  <Form.Control
                    type="text"
                    placeholder="MM/ГГ"
                    className="input exp"
                  />
                </InputGroup>
              </Form.Group>

              <Button className="btn-pay w-100">Оплатить</Button>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Payment;
