import React from "react";
import "./InfoTabButton.css";

export default function InfoTabButton({
  index,
  title,
  planetActiveColor,
  onTabClick,
}) {
  return (
    <div
      className="tab-btn"
      style={{
        backgroundColor:
          planetActiveColor && window.innerWidth > 480
            ? planetActiveColor
            : null,
        borderBottom:
          planetActiveColor && window.innerWidth <= 480
            ? `${planetActiveColor} 4px solid`
            : null,
      }}
      onClick={() => {
        const temp = title.toLowerCase().split(" ");
        const tabName = temp[temp.length - 1];
        onTabClick(tabName);
      }}
    >
      {index && <span>{`0${index}`}</span>}
      <h3>{title}</h3>
    </div>
  );
}
