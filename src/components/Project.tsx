interface ProjImgProps {
    src: string
    alt: string
}

interface ProjDescProps {
    title: string
    desc: string
    ghLink?: string
    gh: boolean
    npmLink?: string
    npm: boolean
    liveLink?: string
    live: boolean
}

export const ProjImage = (props: ProjImgProps) => {
    return (
        <div className="folio-item">
            <img
                src={props.src}
                alt={props.alt}
            />
        </div>
    )

}
export const ProjDescription = (props: ProjDescProps) => {
    return (
        <div className="folio-item2">
            <h2>{props.title}</h2>
            <p>
                {props.desc}{" "}
                {props.gh ? <a
                    href={props.ghLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
                    : ""}
                {props.live ? <a
                    id="live"
                    href={props.liveLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    Live
                </a>
                    : ""}
                {props.npm ? <a
                    id="live"
                    href={props.npmLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    NPM
                </a>
                    : ""}
            </p>{" "}
        </div>
    )
}

