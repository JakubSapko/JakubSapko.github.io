import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
export const Icons = () => {
    return (
        <div className="icons">
            <IconContext.Provider value={{ color: "#333" }}>
                <BsGithub />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#0077B5" }}>
                <BsLinkedin />
            </IconContext.Provider>
        </div>
    );
};
