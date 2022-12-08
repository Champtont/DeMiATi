import { Carousel, Col, Row } from "react-bootstrap";
import GlassButton from "./GlassButton";

const Mainpage = () => {
  return (
    <div id="mainComponents">
      <Row style={{ width: "95%" }} className="mx-auto">
        <Col xs={12} md={6}>
          <div>
            <h1 className="mb-3">Sign In or Sign up!</h1>
            <Row>
              <GlassButton text="I have an account" type="turquoisebtn" />
              <GlassButton text="I am new here" type="pinkbtn" />
            </Row>
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
