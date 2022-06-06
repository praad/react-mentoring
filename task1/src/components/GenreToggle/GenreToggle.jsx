import React from "react";
import "./GenreToggle.css";

function GenreToggle() {
  function searchAction(event) {
    alert("Search: " + event.target.getAttribute("data-value"));
  }

  const items = ["all", "documentary", "comedy", "horror", "crime"];

  const listItems = items.map(function (item, index) {
    return (
      <li
        key={index}
        data-index={index}
        data-value={item}
        onClick={searchAction}
      >
        {item}
      </li>
    );
  });

  return (
    <div>
      <h2>Genre toggle</h2>
      <ul className="genderToggle">{listItems}</ul>
    </div>
  );
}

export default GenreToggle;
