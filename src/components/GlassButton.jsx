import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const GlassButton = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.activity(props.number);
  };

  return (
    <Button
      className={`mb-2 generalbutton ${props.type}`}
      style={{ border: "none" }}
      onClick={handleClick}
    >
      <div className="button-overlay"></div>
      <div>{props.text}</div>
    </Button>
  );
};

export default GlassButton;
