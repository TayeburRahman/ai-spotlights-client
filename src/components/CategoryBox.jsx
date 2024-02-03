import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const CategoryBox = ({ item }) => {
  const [activeTab, setActiveTab] = useState("");

  const handleClickTab = (name) => {
    setActiveTab(name);
  };

  return (
    <Link
      to={`/ai-tools/${item?.replace(/\s+/g, "-")}`}
      className="category__box rounded-full whitespace-nowrap"
    >
      <p className="text-sm font-medium">{item}</p>
    </Link>
  );
};

export default CategoryBox;
