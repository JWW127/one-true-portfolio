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
          src="https://res-console.cloudinary.com/dpc3zrcvs/thumbnails/transform/v1/image/upload//v1652544081/U2NyZWVuc2hvdF9mcm9tXzIwMjItMDEtMTNfMjItMTgtMjRfc3cyYXJl/drilldown"
          alt="bitcoin app"
        />{" "}
      </div>
      <div className="folio-item2">
        {" "}
        <h2>Digi-Tamago</h2>
        <p>
          Get the latest Bitcoin price and compare it against USD CPI basket.{" "}
          <a
            href="https://github.com/JWW127/BTC-CPI-Basket"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>{" "}
      </div>
      <div className="folio-item"> </div>
      <div className="folio-item2"> </div>
      <div className="folio-item"> </div>
      <div className="folio-item2"> </div>
      <div className="folio-item"> </div>
      <div className="folio-item2"> </div>
    </div>
  );
};

export default Portfolio;
