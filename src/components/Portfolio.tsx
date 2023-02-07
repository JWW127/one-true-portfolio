import { ProjImage, ProjDescription } from './Project'

const Portfolio = () => {
    return (
        <div className="folio-container">
            <h1>My Portfolio</h1>

            <ProjImage
                src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1641888291/digitamago_dbgj51.gif"
                alt="virtual pet game gif"
            />
            <ProjDescription
                title="Digi-Tamago"
                desc="A Chrome Extension virtual pet game. Written in vanilla javascript,
                    HTML, and CSS."
                gh={true}
                ghLink="https://github.com/JWW127/digi-tamago"
                npm={false}
                live={false} />

            <ProjImage
                src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1652574564/Screenshot_from_2022-03-23_02-20-34_phvqgx.png"
                alt="alchemy react game"
            />
            <ProjDescription
                title="Alchemy React"
                desc="Classic Alchemy game. Combine Elements like Fire, Water, Air, and
                    Earth, forming new ingredients to use in your combinations."
                gh={true}
                ghLink="https://github.com/JWW127/alchemy-react-game"
                npm={false}
                live={true}
                liveLink="https://react-alchemy-658a3.web.app"
            />

            <ProjImage
                src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1666289998/learn-pos-portfolio_ehzzrr.png"
                alt="Starbucks Learning App"
            />
            <ProjDescription
                title="Learn Sbux"
                desc="A NextJS app designed to help New or Aspiring Starbucks Employees learn and grow." gh={true}
                ghLink="https://github.com/JWW127/learn-sbux"
                npm={false}
                live={false}
            />

            <ProjImage
                src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1665855297/tk3-timer_ksvps4.gif"
                alt="tokyo-3 timer"
            />
            <ProjDescription
                title="Tokyo-3"
                desc="A CLI application that serves as a Pomodoro themed Timer. After the timer is complete, animations are rendered in ascii!"
                gh={true}
                ghLink="https://github.com/JWW127/tokyo-3"
                npm={true}
                npmLink="https://www.npmjs.com/package/tokyo-3"
                live={false}
            />

            <ProjImage
                src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1673832446/hacktober_ey68v3.png"
                alt="tokyo-3 timer"
            />
            <ProjDescription
                title="Hacktoberfest & Tree-Nation"
                desc="Participation in Hacktoberfest, received a Level 4 contribution award, and a tree planted in my name by Tree-Nation."
                gh={false}
                npm={false}
                live={true}
                liveLink="https://tree-nation.com/profile/jwoolever"
            />

            <ProjImage
                src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1652544081/Screenshot_from_2022-01-13_22-18-24_sw2are.png"
                alt="bitcoin app"
            />
            <ProjDescription
                title="BTC Basket"
                desc="A Svelte app that gets the latest Bitcoin price and compares it against USD CPI basket."
                gh={true}
                ghLink="https://github.com/JWW127/BTC-CPI-Basket"
                npm={false}
                live={false}
            />

            <ProjImage
                src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1652840477/cows_hmxmxl.png"
                alt="ufo cow"
            />
            <ProjDescription
                title="SCI-FI-CLI"
                desc="My Static Api, and CLI application combined to bring sci-fi quotes to your command line."
                gh={true}
                ghLink="https://github.com/JWW127/sci-fi-cli"
                npm={false}
                live={false}
            />

            <ProjImage
                src="https://res.cloudinary.com/dpc3zrcvs/image/upload/v1655787776/qrapp_oqraqv.png"
                alt="Signet QR code"
            />
            <ProjDescription
                title="Signet-QR"
                desc="QR-code generator, creating a streamline experience for new Signet employees."
                gh={true}
                ghLink="https://github.com/JWW127/signet-qr-code"
                npm={false}
                live={true}
                liveLink="https://sig-qr.netlify.app"
            />

            <div className="p"></div>
        </div>
    );
};

export default Portfolio;
