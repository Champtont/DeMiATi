import { Col, Row } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { ReactComponent as Email } from "../components/assets/mail.svg";
import { ReactComponent as Github } from "../components/assets/githhubicon.svg";

const DeMiFooter = () => {
  return (
    <footer>
      <div id="iconbox">
        <Row>
          <Col>
            <div>
              <Email />
            </div>
          </Col>
          <Col>
            <div>
              <Github />
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default DeMiFooter;
