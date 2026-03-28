import { Metadata } from "next";
import { WorldMap } from "@/components/layout";

export const metadata: Metadata = {
  title: "Online Zoo - Map",
  description:
    "Explore the wonders of the animal kingdom from the comfort of your home with Online Zoo. Discover fascinating facts, watch live streams, and support wildlife conservation efforts worldwide.",
};

const MapPage = () => {
  return (
    <main>
      <section className="map">
        <div className="container">
          <div className="map-text">
            <h2 className="heading-2">find where are the animals live</h2>
          </div>
          <WorldMap />
        </div>
      </section>
    </main>
  );
};

export default MapPage;
