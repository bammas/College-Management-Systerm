'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState('faculty');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSignup = () => {
    const users = JSON.parse(sessionStorage.getItem(role)) || [];
    users.push(formData);
    sessionStorage.setItem(role, JSON.stringify(users));
    alert('Signup successful!');
    router.push('/login');
  };

  const handleLoginRedirect = () => {
    router.push('/login'); // Redirect to login page
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow p-4" style={{ width: '30rem', borderRadius: '15px' }}>
        <h3 className="text-center mb-4 text-primary">Create an Account</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="faculty">Faculty</option>
              <option value="student">Student</option>
            </Form.Select>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Form.Group>
          <Button variant="primary" className="w-100" onClick={handleSignup}>
            Sign Up
          </Button>
          <div className="text-center mt-3">
            <Button variant="link" className="w-100" onClick={handleLoginRedirect}>
              Already have an account? Login here
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
