import { Carousel, Col, Row } from "react-bootstrap";
import GlassButton from "./GlassButton";
import { useState } from "react";
import LoginBlock from "./LoginBlock";

const Mainpage = () => {
  const [active, setActive] = useState("");

  return (
    <div id="mainComponents">
      <Row style={{ width: "95%" }} className="mx-auto">
        <Col xs={12} md={6}>
          <div>
            {active === "" && (
              <>
                <h1 className="mb-3">Hello There!</h1>
                <Row>
                  <GlassButton
                    text="I have an account"
                    type="turquoisebtn"
                    activity={setActive}
                    number="1"
                  />
                  <GlassButton
                    text="I am new here"
                    type="pinkbtn"
                    activity={setActive}
                    number="2"
                  />
                </Row>
              </>
            )}
            {active === "1" && (
              <>
                <h1>Welcome Back!</h1>
                <LoginBlock />
                <Row>
                  <GlassButton
                    text="Nevermind"
                    type="turquoisebtn"
                    activity={setActive}
                    number=""
                  />
                </Row>
              </>
            )}
            {active === "2" && (
              <>
                <h1>Hey new friend!</h1>
                <Row>
                  <GlassButton
                    text="Nevermind"
                    type="pinkbtn"
                    activity={setActive}
                    number=""
                  />
                </Row>
              </>
            )}
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
