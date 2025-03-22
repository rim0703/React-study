import React from "react";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";

export default function HeaderNavi() {
  const searchAllowPath = ["/", "/pokemon", "/pokemon/"];
  const location = useLocation();
  const showSearch = searchAllowPath.includes(location.pathname) ? true : false;

  return (
    <div>
      <nav
        className="flex items-center justify-between flex-wrap bg-teal-500 p-3"
        style={{ backgroundColor: "#ACD3A8" }}
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/25.png"
            style={{ transform: "scaleX(-1)" }}
          />
          <a className="font-semibold text-xl tracking-tight" href="/">
            포켓몬 도감
          </a>
        </div>{" "}
        {/* {showSearch ? <SearchBar className="mx-auto" /> : ""} */}
      </nav>
    </div>
  );
}
