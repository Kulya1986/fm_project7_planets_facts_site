import React, { useState } from "react";
import "./Navigation.css";

export default function Navigation({ data, onTabClick }) {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  function handleMenuIsOpened() {
    setMenuIsOpened((curr) => !curr);
  }

  const menuColor = menuIsOpened ? "#979797" : "#FFF";

  return (
    <nav>
      <div id="logo">
        <div>The planets</div>
        {window.innerWidth <= 480 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="17"
            onClick={handleMenuIsOpened}
          >
            <g fill={menuColor} fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        )}
      </div>

      <div
        className={`${
          menuIsOpened && window.innerWidth <= 480
            ? "mobile-opened"
            : "tabs-list"
        }`}
      >
        {data.map((item) => (
          <div
            className="tab"
            key={item.name}
            id={`tab-${item.name.toLowerCase()}`}
            onClick={(el) => {
              onTabClick(el.target.innerText.toLowerCase());
              handleMenuIsOpened();
            }}
          >
            {window.innerWidth <= 480 && (
              <div
                className="circle"
                style={{ backgroundColor: item.planetColor }}
              ></div>
            )}
            {item.name}
            {window.innerWidth <= 480 && (
              <div>
                <img src="./assets/icon-chevron.svg" alt="tab-arrow" />
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
