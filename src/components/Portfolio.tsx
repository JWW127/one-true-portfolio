import { ProjDescription } from "./Project";
import ImageLoader from "./Image-Loader";

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
    loRes: string;
    hiRes: string;
    alt: string;
    liveLink?: string;
}

const Portfolio = (props: PPA) => {
    let projectDetails = props.ppa;
    let projectHydration = projectDetails.map((ele) => {
        return (
            <>
                <ImageLoader
                    key={ele.alt}
                    lowResSrc={ele.loRes}
                    highResSrc={ele.hiRes}
                    alt={ele.alt}
                />
                <ProjDescription
                    key={ele.title}
                    title={ele.title}
                    desc={ele.desc}
                    gh={ele.gh}
                    ghLink={ele.ghLink}
                    npm={ele.npm}
                    npmLink={ele.npmLink}
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
