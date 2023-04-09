import { Landing } from "./Sections/Landing/Landing";
import { Layout } from "./components/Layout";
import { Contact } from "./Sections/Contact/Contact";
import { About } from "./Sections/About/About";
import { Technologies } from "./Sections/Technologies/Technologies";
import { Projects } from "./Sections/Projects/Projects";
import { Timeline } from "./Sections/Timeline/Timeline";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

export const App = () => {
    return (
        <Layout>
            <Landing />
            <About />
            <Technologies />
            <Timeline />
            <Projects />
            <Contact />
        </Layout>
    );
};
