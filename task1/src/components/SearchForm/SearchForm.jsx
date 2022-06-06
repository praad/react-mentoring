import React, { useRef } from "react";

function SearchForm() {
  const inputRef = useRef(null);

  function searchAction() {
    alert("Search button pressed: " + inputRef.current.value);
  }

  return (
    <div>
      <h2>Search form</h2>
      <input type="text" placeholder="Search" ref={inputRef} />
      <button onClick={searchAction}>Search</button>
    </div>
  );
}

export default SearchForm;
