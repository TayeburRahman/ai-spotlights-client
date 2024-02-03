import FeaturedTools from "../components/FeaturedTools";
import Hero from "../components/Hero";
import Tools from "../components/Tools";
import { Helmet } from "react-helmet";

const Home = () => {

  return (
    <main>
      <Helmet>
        <title>Ai Spotlights - The Largest Ai Tools Directory</title>
        <meta name="description" content='Ai Spotlights is the largest Ai Tools Directory.A free site to help you find the best AI tools and software to make your work and life more efficient and productive. Updated daily, join millions of followers of our website, newsletter and YouTube.' />
      </Helmet>
      <Hero />
      <FeaturedTools title={'Featured tools'} />
      <Tools title={'Explore More tools'} />
    </main>

  );
};

export default Home;
