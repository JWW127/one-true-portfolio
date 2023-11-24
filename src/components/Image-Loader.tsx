import { useState } from "react";

interface ImageLoaderProp {
    lowResSrc: string;
    highResSrc: string;
    alt: string;
}

const ImageLoader = (props: ImageLoaderProp) => {
    const [imageSrc, setImageSrc] = useState(props.lowResSrc);
    const [style, setStyle] = useState(false);

    const replaceWithHighRes = () => {
        const highResImage = new Image();
        highResImage.src = props.highResSrc;

        highResImage.onload = () => {
            setImageSrc(highResImage.src);
            setStyle(true);
        };
    };

    const srcImage = typeof imageSrc === "string" ? imageSrc : "undefined";

    return style ? (
        <div className="folio-item">
            <img
                src={srcImage}
                alt={props.alt}
            />
        </div>
    ) : (
        <div className="folio-item">
            <img
                className="load-blurr"
                src={srcImage}
                alt={props.alt}
                onLoad={replaceWithHighRes}
            />
        </div>
    );
};

export default ImageLoader;
