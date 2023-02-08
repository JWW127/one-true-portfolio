import { BsLinkedin, BsDiscord, BsTwitter, BsMailbox, BsGithub } from "react-icons/bs";
const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Best Ways to Contact Me</h1>
            <ul>
                <li>
                    {" "}
                    <a
                        href="https://www.linkedin.com/in/jww127/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Linkedin</p>
                        <BsLinkedin />
                    </a>
                </li>
                <li>
                    {" "}
                    <a
                        href="https://discordapp.com/users/967505978318807141"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Discord</p>
                        <BsDiscord />
                    </a>
                </li>
                <li>
                    {" "}
                    <a
                        href="https://www.twitter.com/joseph27dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Twitter</p>
                        <BsTwitter />
                    </a>
                </li>
                <li>
                    {" "}
                    <div className="contact-item">
                        <p>
                            <span id="contact-email">Joseph27.Dev@gmail.com</span>
                        </p>
                        <BsMailbox />
                    </div>
                </li>
                <li>
                    {" "}

                    <a
                        href="https://www.github.com/jww127/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>Github</p>
                        <BsGithub />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
