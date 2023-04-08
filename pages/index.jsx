import Btns from "@/components/Btns";
import Menu from "@/components/Menu";
import Image from "next/image";
import { useState } from "react";
import items from "../components/Data";
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const index = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
    const filterItems = (category) => {
        if (category == "all") {
            setMenuItems(items);
            return
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-white">Here is your menu</h1>
      </div>
          <Btns categories={categories} filterItems={filterItems} />
          <Menu menuItems={menuItems} />
    </>
  );
};

export default index;
