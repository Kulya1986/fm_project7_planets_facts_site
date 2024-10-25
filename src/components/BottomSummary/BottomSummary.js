import React from "react";
import "./BottomSummary.css";

export default function BottomSummary({ planet }) {
  return (
    <section className="bottom-summary">
      <div id="rotation">
        <h4 className="block-title">Rotation time</h4>
        <h2 className="block-data">{planet.rotation}</h2>
      </div>
      <div id="revolution">
        <h4 className="block-title">Revolution time</h4>
        <h2 className="block-data">{planet.revolution}</h2>
      </div>
      <div id="radius">
        <h4 className="block-title">Radius</h4>
        <h2 className="block-data">{planet.radius}</h2>
      </div>
      <div id="temperature">
        <h4 className="block-title">Average temp.</h4>
        <h2 className="block-data"> {planet.temperature}</h2>
      </div>
    </section>
  );
}
