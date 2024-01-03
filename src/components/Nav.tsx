import { Stars } from "./Stars";
import { Link } from "react-router-dom"
import {
  BsFillChatLeftDotsFill,
  BsFillInfoSquareFill,
  BsCodeSquare,
} from "react-icons/bs";


const Nav = () => {
  return (
    <nav>
      <Stars />
      <ul>
        <li key={"logo"} className="logo">
          <h1 id="logo-h1">
            <Link key={"logo2"} to="/">Joey Woolever</Link>
          </h1>
        </li>
        <li key={"port"} className="nav-special">
          <Link key={"port2"} to="/Portfolio">
            <span>
              <BsCodeSquare />
            </span>
            Portfolio
          </Link>
        </li>

        <li key={"about"}>
          <Link key={"about2"} to="/about">
            <span>
              <BsFillInfoSquareFill />
            </span>
            About
          </Link>
        </li>
        <li key={"contact"}>
          <Link key={"contact2"} to="/contact">
            <span>
              <BsFillChatLeftDotsFill />
            </span>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
