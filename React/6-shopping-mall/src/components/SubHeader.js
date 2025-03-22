import React, { useState } from "react";

function SubHeader({ selectCategory }) {
  return (
    <div class="menu-container">
      <div class="menu-buttons">
        <button onClick={() => selectCategory("all")}>전체메뉴</button>
        <button onClick={() => selectCategory("burgers")}>버거</button>
        <button onClick={() => selectCategory("chicken")}>치킨</button>
        <button onClick={() => selectCategory("sides")}>사이드</button>
        <button onClick={() => selectCategory("drinks")}>음료</button>
        <button onClick={() => selectCategory("desserts")}>디저트</button>
      </div>
    </div>
  );
}

export default SubHeader;
