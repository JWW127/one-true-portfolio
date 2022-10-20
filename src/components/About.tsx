const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h2>Joseph Woolever</h2>
        <p>Front-end Developer</p>
      </div>
      <div className="about-inner-container">
        <div className="about-item-1">
          <h3>About Me</h3>
          <p>
            I'm a self taught developer. I got my first taste of programming as
            a kid with free Angelfire and GeoCities websites. In my youth I thought
            it was the coolest thing copying source code from other sites then
            adding it to my free site. While I didn't build anything of note the
            spark was there. I later went on to college at the University of
            Houston, where I majored in Biotechnology. 
          </p>
          <h3>Education</h3>
          <h4>Formal Education</h4>
          <ul>
            <li>High School - Warren Township - Gurnee - IL</li>
            <li>Wharton County Junior College - SugarLand - TX</li>
            <li>
              <span>Biological Sciences</span>
            </li>
            <li>University of Houston - Houston - TX</li>
            <li>
              <span>Biotechnology</span>
            </li>
          </ul>
          <br />
          <h4>Bootcamps & Non-Tradional</h4>
          <ul>
            <li>Udacity - 2018 Cohort</li>
            <li>
              <span>Front-end Nanodegree</span>
            </li>
            <li>FrontEndMasters</li>
            <li>
              <span>300+ Hours</span>
            </li>
            <li>FreeCodeCamp</li>
            <li>
              <span>300+ Hours</span>
            </li>
            <li>Noteworthy</li>
            <li>
              <span>EggHead, Udemy, PluralSight, Youtube</span>
            </li>
          </ul>
          <h3>Skills</h3>
          <h4>Front-end Skills</h4>
          <ul className="skills">
            <li>NextJS</li>
            <li>Typescript/JS</li>
            <li>HTML/JSX</li>
            <li>CSS/SCSS</li>
            <li>Redux</li>
            <li>Express</li>
            <li>Axios</li>
            <li>React</li>
            <li>TailwindCSS</li>
          </ul>
          <h4>Back-end & Database Skills</h4>
          <ul className="skills">
            <li>Prisma</li>
            <li>SQLite</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Firebase</li>
            <li>NodeJS</li>
            <li>NextAuth</li>
          </ul>

          <h3>Employment</h3>
          <ul>
            <li>Starbucks Barista/Trainer 2017-2021</li>
            <li>
              <span>Opened Store 24853</span>
            </li>
            <li>
              <span>Employee of the Quarter(s)</span>
            </li>
            <li>
              <span>Black Apron Coffee Master</span>
            </li>

            <li>HCTRA 2019</li>
            <li>
              <span>Temp position</span>
            </li>
            <li>Home Depot</li>
            <li>
              <span>Garden Department</span>
            </li>
            <li>Great Lakes Navy Commissary</li>
          </ul>
        </div>
        <div className="about-item-2">
          <h3>Projects & Experiences</h3>
          <h4>Google Scholarship + Udacity 2018</h4>
          <p>
            In 2018 I applied for a scholarship from Google, which I ended up
            getting. We were given options of where we could use this
            scholarship, one of the choices being Udacity. I took that
            opportunity to take the Front-End Developer Nanodegree course at
            Udacity. We had live speakers from google and AT&T, and it was a
            really great experience. The perspective I gained from my time with
            Udacity in 2018 was a true eye opener. Observing the workflow and
            thought process of professionals was incredible. Sometimes you don't
            know what is possible until you see someone else do it, and that was
            the case here. This new fountain of knowledge led me even further
            down the rabbit hole of front-end development.
          </p>
          <h4>Golang CoinMarketCap API 2017</h4>
          <p>
            2017 I wanted to test out golang, at the time I was also pretty big
            on cryptocurreny. So I wrote a simple app to pull prices from
            CoinMarketCap's Rest API. This was the first api call I ever made,
            in fact I didnt even know what an api was at the time. I ended up
            deleting it later, embarassed of the code, but now I wish I hadn't.
            You can still find refrences to it if you google "jww127 Go SDK."
          </p>
          <h4>Sweet Rectangles 2016 (retired)</h4>
          <p>
            Built a website for client's cupcake business. The site was built
            using a LAMP stack, the main take away for me was the learning
            experience. The amount of work, the amount of learning, and the
            amount trouble shooting is invaluable. For the first time I truly
            got to appreciate how much engineers do, just to have a simple
            product.
          </p>
          <div className="p"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
