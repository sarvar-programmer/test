import React from "react";
import { ArrowLeft, PlayFill } from "react-bootstrap-icons";
import "./Course-2.css";

function Course2({ course , onBack }) {
  const modules = [
    {
      id: 1,
      title: "Course name",
      modules: 8,
      lessons: 80,
      tasks: 264,
      active: false,
    },
    {
      id: 2,
      title: "Course name",
      modules: 8,
      lessons: 80,
      tasks: 264,
      active: true,
    },
  ];

  return (
    <div className="course-details-container">

      {/* Back */}
      <div className="back-row" onClick={onBack}>
        <ArrowLeft size={20} className="back-icon" />
        <span className="back-text">MENING KURSLARIM</span>
      </div>

      {/* Course title */}
      <h2 className="course-title">{course?.name || "Course name"}</h2>

      {/* Modules card */}
      <div className="modules-wrapper">
        {modules.map((item) => (
          <div className="module-card" key={item.id}>
            <div className="module-header">
              <div className="module-index">
                {item.active ? (
                  <PlayFill className="play-icon" />
                ) : (
                  `${item.id}.`
                )}
              </div>

              <span className="module-name">{item.title}</span>
            </div>

            <div className="module-stats">
              <div>
                <p className="stats-title">Modullar soni</p>
                <p className="stats-value">{item.modules} ta</p>
              </div>
              <div>
                <p className="stats-title">Darslar soni</p>
                <p className="stats-value">{item.lessons} ta</p>
              </div>
              <div>
                <p className="stats-title">Topshiriqlar soni</p>
                <p className="stats-value">{item.tasks} ta</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course2;
