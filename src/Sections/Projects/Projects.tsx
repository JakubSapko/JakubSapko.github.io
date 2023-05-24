import { v4 as uuidv4 } from "uuid";
import { Card } from "../../components/Carousel/Card";
import Carousel from "../../components/Carousel/Carousel";

export const Projects = () => {
    let cards = [
        {
            key: uuidv4(),
            content: (
                <Card
                    title="Ziom"
                    description='Ziom is a OpenAI powered commiting assistant which I built as my "Hello-World" Rust project. '
                    technologies={["Rust", "OpenAI"]}
                    imagen="https://user-images.githubusercontent.com/46461547/227882718-973a7a09-754e-4e8c-aca6-081586099377.gif"
                    codeLink="https://github.com/JakubSapko/ziom"
                />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    title="HucuPlant"
                    description="HucuPlant is my take on a plant watering helper. At the same time this is my sandbox project in which I try out new technologies and ideas. "
                    technologies={[
                        "TypeScript",
                        "NestJS",
                        "React",
                        "PostgreSQL",
                    ]}
                    imagen="https://res.cloudinary.com/dvtgymik1/image/upload/v1684943181/Zrzut_ekranu_2023-05-24_o_17.45.58_lkqlyb.png"
                    codeLink="https://github.com/JakubSapko/hucuPlant"
                />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    title="MSD Project #1"
                    description="An HR-related project which I built as my first project in MSD. Served every company localization in employee management. I played a role of a full-stack developer and a team leader."
                    technologies={[
                        "TypeScript",
                        "Python",
                        "React",
                        "Django",
                        "styled-components",
                        "AWS",
                    ]}
                    imagen="data:image/png;base64,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"
                />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    title="MSD Project #2"
                    description="A second project I delivered as a part of MSD. Due to my colleague, who was responsible for the project at the time, getting sick I had to overtake this project and deliver it in a short period of time. Started project from scratch and lead it to the end with newly employed interns."
                    technologies={[
                        "TypeScript",
                        "React",
                        "Redux",
                        "SCSS",
                        "AWS",
                    ]}
                    imagen="data:image/png;base64,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"
                />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    title="This site!"
                    description="Finally I decided to create my own portfolio! Enjoy!"
                    technologies={[
                        "TypeScript",
                        "React",
                        "SCSS",
                        "React-Spring",
                    ]}
                    imagen="https://res.cloudinary.com/dvtgymik1/image/upload/v1684943975/ezgif.com-video-to-gif_ddgux9.gif"
                    codeLink="https://github.com/JakubSapko/JakubSapko.github.io"
                />
            ),
        },
    ];
    return (
        <div id="projects" className="panel">
            <h1 className="important-text heading">Projects</h1>
            <div className="carousel-container">
                <Carousel
                    cards={cards}
                    height="700px"
                    width="30%"
                    margin="0 auto"
                    offset={2}
                    showArrows={false}
                />
            </div>
        </div>
    );
};
