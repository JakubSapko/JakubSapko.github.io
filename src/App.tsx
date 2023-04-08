import { Landing } from "./Sections/Landing/Landing";
import { Layout } from "./components/Layout";
import { Contact } from "./Sections/Contact/Contact";

export const App = () => {
    return (
        <Layout>
            <Landing />
            <div className="panel">test</div>
            <Contact />
        </Layout>
    );
};
