import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Mainpage from "./components/MainPage";
import DeMiFooter from "./components/DeMiFooter";

function App() {
  return (
    <BrowserRouter>
      <div id="main">
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Mainpage />} />
        </Routes>
        <DeMiFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
