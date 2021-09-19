import type { NextPage } from "next";
import { PublicLayout } from "../components/layouts";
import { Hero } from "../components/pages/homepage";

const Home: NextPage = () => {
    return (
        <PublicLayout>
            <Hero />
        </PublicLayout>
    );
};

export default Home;
