import {
  BsFillChatLeftDotsFill,
  BsFillInfoSquareFill,
  BsCodeSquare,
} from "react-icons/bs";
const Nav = () => {
  return (
    <nav>
      <svg className="stars" height="100" width="100">
        <image href="./../star1.svg" height="50px" width="50px" />
      </svg>
      <svg className="stars-two" height="100" width="100">
        <image href="./../star1.svg" height="50px" width="50px" />
      </svg>
      <svg className="stars-three" height="100" width="100">
        <image href="./../star1.svg" height="25px" width="25px" />
      </svg>
      <svg className="stars-four" height="140" width="140">
        <image className="star-color" href="./../star1.svg" height="140px" width="140px" />
      </svg>

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
    </nav>
  );
};

export default Nav;
