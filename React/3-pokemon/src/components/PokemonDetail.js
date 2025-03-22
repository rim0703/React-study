import React from "react";

export default function PokemonDetail({ profile, detail }) {
  const statType = [
    "Hit Points",
    "Attack",
    "Defense",
    "Special Attack",
    "Special Defense",
    "Speed",
  ];
  return (
    <div>
      {" "}
      <div
        className="p-4 text-sm text-gray-800 rounded-lg bg-gray-50"
        role="alert"
        style={{ padding: "20px" }}
      >
        <p>Height: {detail.height}m</p>
        <p>Weight: {detail.weight}kg</p>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10" />
      {detail.stats.map((stat, index) => {
        return (
          <>
            <div
              className="mb-1 text-base font-medium"
              style={{ textAlign: "left" }}
            >
              {statType[index]}
            </div>
            <div className="w-full bg-gray-200 rounded-full mb-4 ">
              <div
                className="bg-gray-600 text-xs font-medium text-blue-100 text-center p-0.5  leading-none rounded-full"
                style={{ width: (stat.base_stat / 255) * 100 + "%" }}
              >
                {stat.base_stat}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
