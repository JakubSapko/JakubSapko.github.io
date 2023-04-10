import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Theme, useThemeContext } from "../../../context/ThemeContext";
export const Icons = () => {
    const { theme } = useThemeContext();
    const ghColor = theme === Theme.DARK ? "white" : "#333";
    const liColor = theme === Theme.DARK ? "#36a4df" : "#0077B5";
    return (
        <div className="icons">
            <IconContext.Provider value={{ color: ghColor }}>
                <a href="https://github.com/JakubSapko">
                    <BsGithub />
                </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: liColor }}>
                <a href="https://www.linkedin.com/in/jakub-sapko/">
                    <BsLinkedin />
                </a>
            </IconContext.Provider>
        </div>
    );
};
