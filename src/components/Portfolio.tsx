import { ProjImage, ProjDescription } from "./Project";

interface PPA {
    ppa: PortfolioProps[];
}
interface PortfolioProps {
    title: string;
    desc: string;
    gh: boolean;
    ghLink?: string;
    npm: boolean;
    npmLink?: string;
    live: boolean;
    src: string;
    alt: string;
    liveLink?: string;
}

const Portfolio = (props: PPA) => {
    let projectDetails = props.ppa;
    let projectHydration = projectDetails.map((ele) => {
        return (
            <>
                <ProjImage src={ele.src} alt={ele.alt} />
                <ProjDescription
                    title={ele.title}
                    desc={ele.desc}
                    gh={ele.gh}
                    ghLink={ele.ghLink}
                    npm={ele.npm}
                    live={ele.live}
                    liveLink={ele.liveLink}
                />
            </>
        );
    });

    return (
        <div className="folio-container">
            <h1>My Portfolio</h1>

            {projectHydration}

            <div className="p"></div>
        </div>
    );
};

export default Portfolio;
