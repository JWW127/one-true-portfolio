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
        <li className="logo">
          <h1 id="logo-h1">
            <Link to="/">Joey Woolever</Link>
          </h1>
        </li>
        <li className="nav-special">
          <Link to="/Portfolio">
            <span>
              <BsCodeSquare />
            </span>
            Portfolio
          </Link>
        </li>

        <li>
          <Link to="/about">
            <span>
              <BsFillInfoSquareFill />
            </span>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
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
