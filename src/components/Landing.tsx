import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container">
      <p>Hello! I am</p>
      <h1>Joseph Woolever</h1>
      <p style={{ textAlign: "center" }}>
        <span>
          <span id="greater">{`>`}</span>
          <Link to="/portfolio"> Front-end Developer</Link>
        </span>
      </p>
      <p id="gh">
        <span style={{ color: "#7063EB" }}>const</span>
        <span style={{ color: "#44AEB8" }}>linkToGithub</span> ={" "}
        <span>
          <a href="https://github.com/jww127">"https://github.com/jww127"</a>
        </span>
      </p>
    </div>
  );
};
<p>Hello! I am</p>;
export default Landing;
