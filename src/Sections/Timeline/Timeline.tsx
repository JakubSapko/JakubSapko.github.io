import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.scss";

export const Timeline = () => {
    return (
        <div id="timeline" className="panel">
            <h1 className="important-text heading">Timeline</h1>
            <div className="timeline-container">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)",
                        }}
                        date="Feb. 2023 - present"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Software Developer & Team Leader
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            MSD (Merck)
                        </h4>
                        <p>
                            Developement of web applications, team leader,
                            solution consultant. Primarly using React, Node.js,
                            TypeScript and Python.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        textClassName="timeline-text-even"
                        className="vertical-timeline-element--work"
                        date="May 2022 - Feb. 2023"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Software Developer
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            MSD (Merck)
                        </h4>
                        <p>
                            Developement of web applications, occasional data
                            analysis. I was one of the leading figures in a
                            collaboration of our team with summer internship
                            participants from USA.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        textClassName="timeline-text-odd"
                        className="vertical-timeline-element--work"
                        date="Nov. 2021 - May 2022"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Intern Data Analyst
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            MSD (Merck)
                        </h4>
                        <p>
                            Maintaining existing codebase. After first two
                            months I proposed a possible solution for one of the
                            buisness issues and was assigned as a main developer
                            in this project.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        textClassName="timeline-text-even"
                        className="vertical-timeline-element--work"
                        date="Sep. 2021"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            University switch
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Warsaw, PL
                        </h4>
                        <p>
                            After noticing that I spend majority of time
                            learning more about Computer Science and programming
                            rather than Physics I decided to switch my studies
                            accordingly.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        textClassName="timeline-text-odd"
                        className="vertical-timeline-element--education"
                        date="2019-2021"
                        iconStyle={{
                            background: "rgb(233, 30, 99)",
                            color: "#fff",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Workshops
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Warsaw, PL
                        </h4>
                        <p>
                            I attended a series of programming-related courses
                            and workshops provided by my University (as well as
                            other universities and institutions in Warsaw) which
                            sparked my interest in programming - mainly Django
                            web development.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        textClassName="timeline-text-even"
                        className="vertical-timeline-element--education"
                        date="2019-2022"
                        iconStyle={{
                            background: "rgb(233, 30, 99)",
                            color: "#fff",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Physics
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            University of Warsaw, Warsaw, PL
                        </h4>
                        <p>
                            After I graduated high school I decided to start my
                            Bachelor studies at University of Warsaw, trying to
                            major in Physics. Later on I reflected on that
                            decision and decided to switch to Computer Science.
                            This 2 year adventure resulted in me getting a solid
                            foundation in Physics, complex Mathematics and
                            programming basics. I also got to know a lot of
                            great people, which is the biggest value in this
                            episode of my life.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        textClassName="timeline-text-odd"
                        className="vertical-timeline-element--education"
                        date="2019"
                        iconStyle={{
                            background: "rgb(233, 30, 99)",
                            color: "#fff",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Kazimierz Wielki High School
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Leczyca, PL
                        </h4>
                        <p>
                            I graduated from a high school in my hometown,
                            embarking on a new, great adventure. This was the
                            time when I developed a deep passion for science.
                            During my first year in high school I also got the
                            FCE certification with grade B.{" "}
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "rgb(16, 204, 82)",
                            color: "#fff",
                        }}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
};
