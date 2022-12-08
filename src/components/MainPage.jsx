import { Carousel, Col, Row } from "react-bootstrap";
import GlassButton from "./GlassButton";

const Mainpage = () => {
  return (
    <div id="mainComponents">
      <Row style={{ width: "95%" }} className="mx-auto">
        <Col xs={12} md={6}>
          <div>
            <h1 className="mb-3">Sign In or Sign up!</h1>
            <div>
              <Row>
                <GlassButton
                  text="I have an account"
                  color="var(--turquoise)"
                />
                <GlassButton text="I am new here" color="var(--wintersky)" />
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Carousel></Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default Mainpage;
