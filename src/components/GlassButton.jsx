import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const GlassButton = (props) => {
  const navigate = useNavigate();

  return (
    <Button
      className={`mb-2 generalbutton ${props.type}`}
      style={{ border: "none" }}
      onClick={() => navigate(props.link)}
    >
      <div className="button-overlay"></div>
      <div>{props.text}</div>
    </Button>
  );
};

export default GlassButton;
