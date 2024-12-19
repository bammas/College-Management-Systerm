'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Button, Container, Card } from 'react-bootstrap';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState('faculty');
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = () => {
    const users = JSON.parse(sessionStorage.getItem(role)) || [];
    const user = users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      alert('Login successful!');
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));
      router.push(`/${role}`);
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleSignupRedirect = () => {
    router.push('/signup'); // Redirect to signup page
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow p-4" style={{ width: '25rem', borderRadius: '15px' }}>
        <h3 className="text-center mb-4 text-primary">Login</h3>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="faculty">Faculty</option>
              <option value="student">Student</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </Form.Group>
          <Button variant="primary" className="w-100" onClick={handleLogin}>
            Login
          </Button>
          <div className="text-center mt-3">
            <Button variant="link" className="w-100" onClick={handleSignupRedirect}>
              Don't have an account? Sign Up here
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
