import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyCourses.css";

function MyCourses({ onOpenCourse }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulyatsiya qilingan API chaqiruvi
  useEffect(() => {
    setTimeout(() => {
      setCourses([
        { id: 1, name: "Frontend Development", status: "active" },
        { id: 2, name: "Backend (Node.js)", status: "active" },
        { id: 3, name: "Kompyuter savodxonligi", status: "completed" },
        { id: 4, name: "Logistika Asoslari", status: "active" },
        { id: 5, name: "Ingliz tili A1", status: "active" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="success" />
        <p className="mt-2">Yuklanmoqda...</p>
      </div>
    );
  }

  return (
    <div>
      <h4 className="fw-bold mb-4">MENING KURSLARIM</h4>
      <Row>
        {courses.map((course) => (
          <Col md={6} sm={6} xs={12} className="p-4" key={course.id}>
            <Card className="course-card text-center">
              <Card.Body>
                <div
                  className={`course-circle ${
                    course.status === "completed" ? "completed" : ""
                  } d-flex align-items-center justify-content-center`}
                >
                  {course.name.length > 40
                    ? course.name.slice(0, 30) + "..."
                    : course.name}
                </div>
                <Button
                  variant="link"
                  className="mt-2 course-btn"
                  onClick={() => onOpenCourse(course)}
                >
                  Kirish
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MyCourses;
