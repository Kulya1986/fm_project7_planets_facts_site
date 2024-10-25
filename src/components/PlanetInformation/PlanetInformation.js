import React from "react";
import "./PlanetInformation.css";
import InfoTabButton from "../InfoTabButton/InfoTabButton";

const tabs = ["Overview", "Internal structure", "Surface geology"];
const mobileTabs = ["Overview", "Structure", "Surface"];

export default function PlanetInformation({
  planet,
  activeInfoTab,
  activeInfoTabChange,
}) {
  const tabKeyInfo =
    activeInfoTab === "overview"
      ? planet.overview
      : activeInfoTab === "structure"
      ? planet.structure
      : planet.geology;

  const imgSource =
    activeInfoTab === "overview" ||
    activeInfoTab === "geology" ||
    activeInfoTab === "surface"
      ? planet.images.planet
      : planet.images.internal;

  return (
    <section className="planet">
      {window.innerWidth <= 480 && (
        <div className="info-tabs">
          {tabs.map((el, ind) => (
            <InfoTabButton
              key={el.toLowerCase()}
              title={mobileTabs[ind]}
              planetActiveColor={
                el.toLowerCase().includes(activeInfoTab)
                  ? planet.planetColor
                  : null
              }
              onTabClick={activeInfoTabChange}
            />
          ))}
        </div>
      )}
      <div id="planet-image">
        <img src={imgSource} alt={planet.name} />
        {(activeInfoTab === "geology" || activeInfoTab === "surface") && (
          <img
            id="geo-img"
            src={planet.images.geology}
            alt={`${planet.name}-geology`}
          />
        )}
      </div>
      <div id="planet-info">
        <div className="info-content">
          <h1>{planet.name}</h1>
          <p className="content">{tabKeyInfo.content}</p>
          <p>
            <span>Source : </span>
            <a href={tabKeyInfo.source} target="_blank" rel="noreferrer">
              wikipedia
              <img src="./assets/icon-source.svg" alt="source" />
            </a>
          </p>
        </div>
        {window.innerWidth > 480 && (
          <div className="info-tabs">
            {tabs.map((el, ind) => (
              <InfoTabButton
                key={el.toLowerCase()}
                index={ind + 1}
                title={el}
                planetActiveColor={
                  el.toLowerCase().includes(activeInfoTab)
                    ? planet.planetColor
                    : null
                }
                onTabClick={activeInfoTabChange}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
