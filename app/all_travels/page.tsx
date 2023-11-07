import styles from "./page.module.css";
import React from "react";
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
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium text-center ">
              {travel.title}
            </div>

            <div className="collapse-content">
              {travel.destinations.map((destination, i) => (
                <div key={i} className="p-5 text-center">
                  <p>{destination}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelDestinations;
export const runtime = "edge";
