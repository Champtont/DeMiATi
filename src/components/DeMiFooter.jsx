import { Col, Row } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const DeMiFooter = () => {
  return (
    <footer>
      <div id="iconbox">
        <Row>
          <Col>
            <div>
              <FaPhone />
            </div>
          </Col>
          <Col>
            <div>
              <VscGithub />
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default DeMiFooter;
