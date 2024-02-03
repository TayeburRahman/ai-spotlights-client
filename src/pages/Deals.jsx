import FeaturedTools from "../components/FeaturedTools";
import Tools from "../components/Tools";
import { Helmet } from "react-helmet";

const Deals = () => {

  return (
    <main className="wrapper my-10">
      <Helmet>
        <title>Deals - Ai Spotlights</title>
      </Helmet>
      <FeaturedTools title="Deals" />
      <Tools />
    </main>
  );
};

export default Deals;