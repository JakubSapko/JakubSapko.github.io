import { Icons } from "./Icons/Icons";

export const Landing = () => {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };
    return (
        <div className="landing-container">
            <div className="welcome-text-container">
                <div className="hello-text">
                    <span className="typedText"></span>
                    <span className="hello-emoji">👋🏼</span>
                </div>
                <div>
                    I'm <span className="name">Jakub Sapko</span>, <br /> a
                    full-stack developer with the "everything's possible"
                    mindset and a focus on creating great experiences 👨🏼‍💻
                </div>
                <div className="get-in-touch" onClick={() => scrollToBottom()}>
                    Get in touch with me! <div className="down-hand">👇🏼</div>
                </div>
            </div>
            <div className="side-container">
                <div className="theme-switcher-container">elo3</div>
                <div className="icons-container">
                    <Icons />
                </div>
            </div>
        </div>
    );
};
