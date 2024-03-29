import { ThemeSwitcher } from "../../components/ThemeSwitcher/ThemeSwitcher";
import { Icons } from "./Icons/Icons";

export const Landing = () => {
    const scrollToBottom = () => {
        const contactForm = document.getElementById("contact");
        contactForm?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <div id="start" className="panel landing-container">
                <div className="welcome-text-container">
                    <div className="hello-text">
                        <span className="typedText"></span>
                        <span className="hello-emoji">👋🏼</span>
                    </div>
                    <div>
                        I'm <span className="important-text">Jakub Sapko</span>,{" "}
                        <br /> a full-stack developer with the "everything's
                        possible" mindset and a focus on creating great
                        experiences 👨🏼‍💻
                    </div>
                    <div className="get-in-touch">
                        Get in touch with me!{" "}
                        <div
                            className="down-hand"
                            onClick={() => scrollToBottom()}
                        >
                            👇🏼
                        </div>
                    </div>
                </div>
                <div className="side-container">
                    <div className="theme-switcher-container">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </>
    );
};
