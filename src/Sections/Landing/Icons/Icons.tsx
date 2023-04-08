import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
export const Icons = () => {
    return (
        <div className="icons">
            <IconContext.Provider value={{ color: "#333" }}>
                <a href="https://github.com/JakubSapko">
                    <BsGithub />
                </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#0077B5" }}>
                <a href="https://www.linkedin.com/in/jakub-sapko/">
                    <BsLinkedin />
                </a>
            </IconContext.Provider>
        </div>
    );
};
