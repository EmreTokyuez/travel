import React from "react";
import styles from "./page.module.css";

const TravelDestinations = () => {
  const travels = [
    { title: "Travel 1", destinations: ["Destination 1", "Destination 2"] },
    { title: "Travel 2", destinations: ["Destination 3", "Destination 4"] },
    // Add more travels here...
  ];

  return (
    <div>
      {travels.map((travel, index) => (
        <div key={index}>
          <h2>{travel.title}</h2>
          {travel.destinations.map((destination, i) => (
            <div
              key={i}
              className="destination"
              style={{
                border: "1px solid black",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {destination}
              {i < travel.destinations.length - 1 && <span> → </span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TravelDestinations;
export const runtime = "edge";
