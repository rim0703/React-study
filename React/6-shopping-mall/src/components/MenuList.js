import React, { useState } from "react";
import SubMenu from "./SubHeader";
import MenuCard from "./MenuCard";

function MenuList() {
  const [category, setCategory] = useState("all");

  function selectCategory(selected) {
    setCategory(selected);
  }

  return (
    <div className="">
      <SubMenu selectCategory={selectCategory} />
      <MenuCard />
    </div>
  );
}

export default MenuList;
