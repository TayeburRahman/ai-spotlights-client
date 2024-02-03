import { useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import CategoryBox from "./CategoryBox";
import categories from "../../public/category.json";

const Categories = () => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (scrollAmount) => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollLeft += scrollAmount;
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const deviceWidth = window.innerWidth;
  const scrollAmount = deviceWidth * 0.2;

  return (
    <div className="flex justify-between items-center gap-5">
      {showLeftArrow && (
        <button onClick={() => scroll(-scrollAmount)}>
          <BsArrowLeftShort className="h-7 w-7 brightness-90" />
        </button>
      )}

      <div
        className="flex gap-2 no-scrollbar overflow-hidden scroll-smooth"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {categories.map((item, index) => (
          <CategoryBox key={index} item={item} />
        ))}
      </div>

      {showRightArrow && (
        <button onClick={() => scroll(scrollAmount)}>
          <BsArrowRightShort className="h-7 w-7 brightness-90" />
        </button>
      )}
    </div>
  );
};

export default Categories;
