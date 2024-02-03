import Categories from "../components/Categories";
import SearchInput from "../components/SearchInput";
import ToolsCard from "../components/ToolsCard";
import { useSearch } from "../context/search";

const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [values] = useSearch();

  return (
    <>
      <section className="wrapper mt-10">
        <div className="space-y-5 flex items-center justify-center flex-col">
        <h1 className="text-5xl  max-md:text-[2.5rem] text-center uppercase font-bold">Ai Spotlights</h1>
        <h2 className="text-xl max-md:text-sm uppercase text-center font-medium brightness-75">
          THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY
        </h2>
        </div>
        <SearchInput />
        <Categories />
        <div className="container p-10">
          <div className="border-cyan">
            <h6 className="text-center">
              {values?.results.length < 1
                ? "No Products Found"
                : `Found ${values?.results.length}`}
            </h6>
            <div className="d-flex flex-wrap mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {values?.results.map((item) => (
                  <ToolsCard key={item?._id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
