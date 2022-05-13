import Nav from "./components/Nav";
import MainContent from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import {
  BsFillChatLeftDotsFill,
  BsFillInfoSquareFill,
  BsCodeSquare,
} from "react-icons/bs";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <ul>
            <li className="logo">
              <h1>
                <a href="#">Joseph Woolever</a>
              </h1>
            </li>
            <li className="nav-special">
              <a href="#">
                <span>
                  <BsCodeSquare />
                </span>
                Portfolio
              </a>
            </li>

            <li>
              <a href="#">
                <span>
                  <BsFillInfoSquareFill />
                </span>
                About
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <BsFillChatLeftDotsFill />
                </span>
                Contact
              </a>
            </li>
          </ul>
        </Nav>
        <MainContent>
          <Portfolio />
          <About />
          <Contact />
        </MainContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
