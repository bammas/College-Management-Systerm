"use client";

import React, { useState, useEffect } from "react";
import Header from "../shared/Header";

const FacultyDashboard = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  });
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [subjectName, setSubjectName] = useState("");
  const [facultyName, setFacultyName] = useState("");
  const userName = sessionStorage.getItem("facultyName") || "Faculty Name";

  // Fetch students from sessionStorage
  useEffect(() => {
    const storedStudents = JSON.parse(sessionStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);

  // Add a new student to sessionStorage
  const handleAddStudent = () => {
    if (
      newStudent.firstName.trim() &&
      newStudent.lastName.trim() &&
      newStudent.email.trim()
    ) {
      const updatedStudents = [...students, newStudent];
      setStudents(updatedStudents);
      sessionStorage.setItem("students", JSON.stringify(updatedStudents));
      alert("Student added successfully!");
      setNewStudent({ firstName: "", lastName: "", email: "", contactNumber: "" });
    } else {
      alert("Please fill out all required fields.");
    }
  };

  // Enroll subject
  const handleEnroll = () => {
    const subjects = JSON.parse(sessionStorage.getItem("subjects")) || [];
    subjects.push({
      studentId: selectedStudent,
      subjectName,
      facultyName,
    });
    sessionStorage.setItem("subjects", JSON.stringify(subjects));

    alert("Subject enrolled successfully!");
    setSelectedStudent(null);
  };

  return (
    <div>
      <Header userType="faculty" userName={userName} />
      <div className="container mt-5">

        <h1 className="text-center mb-4">Faculty Dashboard</h1>

        {/* Add Student Section */}
        <div className="card mb-5 p-4 shadow-sm">
          <h3 className="card-title text-center mb-4">Add New Student</h3>
          <div className="row g-3">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={newStudent.firstName}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, firstName: e.target.value })
                }
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={newStudent.lastName}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, lastName: e.target.value })
                }
              />
            </div>
            <div className="col-md-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={newStudent.email}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, email: e.target.value })
                }
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Contact Number"
                value={newStudent.contactNumber}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, contactNumber: e.target.value })
                }
              />
            </div>
            <div className="col-md-12 mt-3 d-flex justify-content-center">
  <button className="btn btn-success w-100" style={{ maxWidth: '142px', margin: '0 auto', padding: '13px' }}  onClick={handleAddStudent}>
    Add Student
  </button>
</div>

          </div>
        </div>

        {/* Students List */}
        <div className="card p-4 shadow-sm">
          <h3 className="card-title text-center mb-4">Enrolled Students</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.email}</td>
                  <td>
                    {student.firstName} {student.lastName}
                  </td>
                  <td>{student.contactNumber || "N/A"}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => setSelectedStudent(student.email)}
                    >
                      Enroll Subject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Enrollment Modal */}
        {selectedStudent && (
          <div className="modal show d-block">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Enroll Subject</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSelectedStudent(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Subject Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={subjectName}
                      onChange={(e) => setSubjectName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Faculty Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={facultyName}
                      onChange={(e) => setFacultyName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSelectedStudent(null)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleEnroll}
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyDashboard;
