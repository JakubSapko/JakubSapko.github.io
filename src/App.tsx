import { Landing } from "./Sections/Landing/Landing";
import { Layout } from "./components/Layout";

export const App = () => {
    return (
        <Layout>
            <Landing />
            <div className="panel">test</div>
        </Layout>
    );
};
