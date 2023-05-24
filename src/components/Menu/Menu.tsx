import { useEffect } from "react";
interface IMenu {
    isVisible: boolean;
}
export const Menu: React.FC<IMenu> = ({ isVisible }) => {
    useEffect(() => {
        if (isVisible) {
            const menu = document.getElementById("menu");
            menu?.classList.add("fade-in");
        }
    }, [isVisible]);

    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div id="menu" className="menu">
            <p onClick={() => handleClickScroll("start")}>1 - Start</p>
            <p onClick={() => handleClickScroll("about")}>2 - About</p>
            <p onClick={() => handleClickScroll("timeline")}>3 - Timeline</p>
            <p onClick={() => handleClickScroll("projects")}>4 - Projects</p>
            <p onClick={() => handleClickScroll("contact")}>5 - Contact</p>
        </div>
    );
};
