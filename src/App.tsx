import { Landing } from "./Landing";
import { Layout } from "./Layout";

export const App = () => {
    return (
        <Layout>
            <Landing />
            <div className="panel">test</div>
        </Layout>
    );
};
