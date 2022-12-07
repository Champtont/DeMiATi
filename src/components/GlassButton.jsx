import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const GlassButton = (props) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/")}>
      <div className="button-overlay">{props.text}</div>
    </Button>
  );
};

export default GlassButton;
