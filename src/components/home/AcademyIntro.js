import { Container, Row, Col, Card } from "react-bootstrap";
import Workflow from "../../assets/workflow.png";
import Academy from "../../assets/academy.png";
import "./AcademyIntro.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function AcademyIntro() {
  

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const definitions = [
    "Professional ta'lim maskani",
    "Professional ta'lim maskani",
    "Professional ta'lim maskani",
    "Professional ta'lim maskani",
  ];

  return (
    <Container fluid className="hero">
      <Row style={{ marginLeft: "5px" }} className="my_row">
        <Col md={6} sm={6} xs={12} style={{ paddingRight: "6.5px" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            data-aos="fade-right"
          >
            <div className="intro">
              <p className="intro_title">Ta'lim - bu yaxshi kelajak yaratish</p>
              <p className="academy_description">
                Bizning akademiyad online ta’lim olib o’z kelajagingizni
                quring.Bizning bitiruvchilarmiz hozirgi kunda o’z sohalarida
                professiona darajaga chiqishkan.
              </p>
              <img
                src={Workflow}
                className="mx-auto d-block workflow"
                alt="workflow"
              />
            </div>
          </motion.div>
        </Col>

        <Col md={6} sm={6} xs={12} style={{ paddingLeft: "16.5px" }}>
          <motion.img
            src={Academy}
            alt="academy room"
            className="room img-fluid"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            data-aos="fade-left"
          />
        </Col>

        <p className="academy_this" data-aos="fade-up">
          Akademiya bu -
        </p>
      </Row>

      <Row className="definitions_row">
        {definitions.map((text, index) => (
          <Col md={6} sm={6} xs={12}
            key={index}
            className="definitions_col"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="definition">
                <div className="circle"></div>
                <Card.Body>
                  <Card.Text className="definition_text">{text}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
