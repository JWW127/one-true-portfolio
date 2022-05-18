const Portfolio = () => {
  return (
    <div className="folio-container">
      <div>
        <h1>My Portfolio</h1>
      </div>
      <div className="folio-item">
        <img
          src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1641888291/digitamago_dbgj51.gif"
          alt="virtual pet game gif"
        />
      </div>
      <div className="folio-item2">
        <h2>Digi-Tamago</h2>
        <p>
          A Chrome Extension virtual pet game. Written in vanilla javascript,
          HTML, and CSS.{" "}
          <a
            href="https://github.com/JWW127/digi-tamago"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>{" "}
      </div>
      <div className="folio-item">
        <img
          src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1652574564/Screenshot_from_2022-03-23_02-20-34_phvqgx.png"
          alt="alchemy react game"
        />{" "}
      </div>
      <div className="folio-item2">
        <h2>Alchemy React</h2>
        <p>
          Classic Alchemy game. Combine Elements like Fire, Water, Air, and
          Earth, forming new ingredients to use in your combinations.{" "}
          <a
            id="live"
            href="https://react-alchemy-658a3.web.app"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
          <a
            href="https://github.com/JWW127/alchemy-react-game"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </div>

      <div className="folio-item">
        <img
          src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1652544081/Screenshot_from_2022-01-13_22-18-24_sw2are.png"
          alt="bitcoin app"
        />{" "}
      </div>
      <div className="folio-item2">
        {" "}
        <h2>BTC Basket</h2>
        <p>
          A Svelte app that gets the latest Bitcoin price and compares it
          against USD CPI basket.{" "}
          <a
            href="https://github.com/JWW127/BTC-CPI-Basket"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>{" "}
      </div>
      <div className="folio-item">
        <img
          src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1652840477/cows_hmxmxl.png"
          alt="ufo cow"
        />{" "}
      </div>
      <div className="folio-item2">
        {" "}
        <h2>SCI-FI-CLI</h2>
        <p>
          A Static Api, and CLI application combined to bring sci-fi quotes to your command line. {" "}
          <a
            href="https://github.com/JWW127/sci-fi-cli"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>{" "}
      </div>
      <div className="folio-item"> </div>
      <div className="folio-item2"> </div>
    </div>
  );
};

export default Portfolio;
