import { Landing } from "./Sections/Landing/Landing";
import { Layout } from "./components/Layout";
import { Contact } from "./Sections/Contact/Contact";
import { About } from "./Sections/About/About";
import { Projects } from "./Sections/Projects/Projects";
import { Timeline } from "./Sections/Timeline/Timeline";

export const App = () => {
    return (
        <Layout>
            <Landing />
            <About />
            <Timeline />
            <Projects />
            <Contact />
        </Layout>
    );
};
