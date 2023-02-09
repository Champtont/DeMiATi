import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import GlassButton from "./GlassButton";

const LoginBlock = () => {
  const [active, setActive] = useState("");

  return (
    <Form className="login-form">
      {active === "" && (
        <>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="primary" type="submit" className="mb-2">
              Submit
            </Button>
            <GlassButton
              text="Create new account"
              type="pinkbtn"
              activity={setActive}
              number="2"
            />
          </div>
        </>
      )}
    </Form>
  );
};

export default LoginBlock;
