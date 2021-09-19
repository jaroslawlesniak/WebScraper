import type { NextPage } from "next";
import { PublicLayout } from "../components/layouts";
import { About, Hero } from "../components/pages/homepage";

const Home: NextPage = () => {
    return (
        <PublicLayout>
            <Hero />
            <About />
        </PublicLayout>
    );
};

export default Home;
