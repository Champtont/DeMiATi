import { Form, Button } from "react-bootstrap";

const LoginBolck = () => {
  return (
    <Form className="login-form">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Please enter your username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-2">
        Submit
      </Button>
    </Form>
  );
};

export default LoginBolck;
