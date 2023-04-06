import { Icons } from "./Icons";
import { Landing } from "./Landing";
import { Layout } from "./Layout";

export const App = () => {
    return (
        <Layout>
            <Landing />
            <Icons />
            <div className="panel">test</div>
        </Layout>
    );
};
