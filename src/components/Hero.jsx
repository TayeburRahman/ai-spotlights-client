import Categories from "./Categories";
import SearchInput from "./SearchInput";

const Hero = () => {
  return (
    <section className="wrapper mt-[4rem]">
      <div className="space-y-5 flex items-center justify-center flex-col my-10">
        <h2 className="text-2xl max-md:text-sm text-center font-norma brightness-75">
          Ai Spotlights
        </h2>
        <h1 className="text-6xl  max-md:text-[2.5rem] text-center capitalize font-medium mb-50">The largest AI tools directory</h1>
      </div>

      <div className="mt-5">
        <SearchInput />
        <Categories />
      </div>
    </section>
  );
};

export default Hero;
