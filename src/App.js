import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Mainpage from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
