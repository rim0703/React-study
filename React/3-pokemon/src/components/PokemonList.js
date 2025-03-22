import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [koreanNames, setKoreanNames] = useState({});
  const observer = useRef();

  const LIMIT = 20;

  const fetchPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`
    );
    const data = await response.json();
    setPokemonList((prevList) => [...prevList, ...data.results]);
    if (data.results.length < LIMIT) {
      setHasMore(false);
    }

    data.results.forEach(async (pokemon, index) => {
      const speciesResponse = await fetch(
        pokemon.url.replace("pokemon", "pokemon-species")
      );
      const speciesData = await speciesResponse.json();

      const koreanName = speciesData.names.find(
        (name) => name.language.name === "ko"
      )?.name;

      if (koreanName) {
        setKoreanNames((prevNames) => ({
          ...prevNames,
          [index + offset + 1]: koreanName,
        }));
      }
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, [offset]);

  const lastPokemonRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prevOffset) => prevOffset + LIMIT);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  const filteredPokemon = pokemonList.filter((pokemon) =>
    koreanNames[pokemonList.indexOf(pokemon) + 1]
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pokemon-list p-6">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div
        className="grid grid-cols-5 gap-4 mx-auto"
        style={{ width: "800px" }}
      >
        {filteredPokemon.map((pokemon, index) => {
          const koreanName = koreanNames[index + 1];
          if (filteredPokemon.length === index + 1) {
            return (
              <Link
                key={index}
                to={`/pokemon/${index + 1}`}
                ref={lastPokemonRef}
              >
                <div className="p-4 bg-white rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <img
                      className="w-32 h-32 mx-auto"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                        index + 1
                      }.png`}
                      alt={pokemon.name}
                    />
                  </div>

                  <p className="mt-4 text-lg font-bold capitalize">
                    {koreanName || pokemon.name}
                  </p>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                    #{index + 1}
                  </span>
                </div>
              </Link>
            );
          } else {
            return (
              <Link key={index} to={`/pokemon/${index + 1}`}>
                <div className="p-4 bg-white rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <img
                      className="w-32 h-32 mx-auto"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                        index + 1
                      }.png`}
                      alt={pokemon.name}
                    />
                  </div>

                  <p className="mt-4 text-lg font-bold capitalize">
                    {koreanName || pokemon.name}
                  </p>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                    #{index + 1}
                  </span>
                </div>
              </Link>
            );
          }
        })}
      </div>
      {!hasMore && <p className="text-center mt-4">No more Pokémon to load</p>}
    </div>
  );
}

export default PokemonList;
