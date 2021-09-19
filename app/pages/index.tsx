import type { NextPage } from "next";
import { PublicLayout } from "../components/layouts";
import { About, Hero, Prices } from "../components/pages/homepage";

const Home: NextPage = () => {
    return (
        <PublicLayout>
            <Hero />
            <About />
            <Prices />
        </PublicLayout>
    );
};

export default Home;
