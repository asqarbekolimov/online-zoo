"use client";

import { AnimalsLocation } from "@/lib/constants";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const WorldMap = () => {
  const geoUrl = "/features.json";

  return (
    <div className="map__container">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 110,
        }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1a1240"
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#2d1f70", outline: "none" },
                  pressed: {
                    fill: "#1a1240",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>

        {AnimalsLocation.map(({ coordinates, icon }) => (
          <Marker key={coordinates.join(",")} coordinates={coordinates}>
            <foreignObject width={220} height={220}>
              <div className="map__marker">
                <div className="marker__pin">{icon}</div>
              </div>
            </foreignObject>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
