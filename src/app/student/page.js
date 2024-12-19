"use client";

import React from "react";
import Header from "../shared/Header";

const StudentDashboard = () => {
  const loggedInStudent = JSON.parse(sessionStorage.getItem("loggedInUser"));
  const subjects = JSON.parse(sessionStorage.getItem("subjects")) || [];
  const studentSubjects = subjects.filter(
    (subject) => subject.studentId === loggedInStudent.email
  );
  const userName = sessionStorage.getItem('studentName') || 'Student Name';

  return (
    <div className="min-vh-100 bg-light">
      <Header />
      <div className="container mt-5">

        {/* Dashboard Header */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="display-4 text-primary">Student Dashboard</h1>
            <h2 className="text-secondary">Welcome, {loggedInStudent.firstName}</h2>
          </div>
        </div>

        {/* Enrolled Subjects Section */}
        <div className="row">
          <div className="col-12">
            <h3 className="mb-3">Your Enrolled Subjects:</h3>

            {/* Subjects List */}
            <div className="card shadow-sm">
              <div className="card-body">
                {studentSubjects.length > 0 ? (
                  <ul className="list-group list-group-flush">
                    {studentSubjects.map((subject, index) => (
                      <li className="list-group-item" key={index}>
                        <div className="d-flex justify-content-between">
                          <div>
                            <strong>Subject:</strong> {subject.subjectName}
                          </div>
                          <div>
                            <strong>Faculty:</strong> {subject.facultyName}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted">No subjects enrolled yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;
