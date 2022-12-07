import { Carousel, Col, Row } from "react-bootstrap";

const Mainpage = () => {
  return (
    <div id="mainComponents">
      <Row style={{ width: "100%" }}>
        <Col xs={12} md={6}>
          <div>
            <h1>Sign In or Sign up!</h1>
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
