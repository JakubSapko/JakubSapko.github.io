import { useRef } from "react";
import photo from "../../assets/photome.jpg";
import { Menu } from "../../components/Menu";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export const About = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, { freezeOnceVisible: true });
    const isVisible = !!entry?.isIntersecting;

    const getAge = () => {
        const birthday = new Date("03/08/1999");
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    return (
        <>
            <div id="about" className="panel">
                <h1 className="important-text heading">About me</h1>
                <div className="about-me-container">
                    <div className="photo-container">
                        <img
                            src={photo}
                            alt="A cool photo of me"
                            className="photo"
                        />
                    </div>
                    <div className="text-container">
                        I'm a {getAge()} years old software developer from
                        Poland, currently stationed in Warsaw. Currently I'm
                        focused on a
                        <span className="node-styling"> node.js</span>{" "}
                        development environment. I've been studying Physics for
                        two years before I decided to switch my Bachelor studies
                        to Computer Science, which I'm finishing next year.
                        Currently employed as a Software Developer and a Team
                        Leader in <span className="merck-styling">Merck</span>.
                    </div>
                </div>
            </div>
            <div ref={ref} />
            {isVisible ? <Menu /> : null}
        </>
    );
};
