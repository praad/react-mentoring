import React, { useState } from "react";

function SearchForm() {
  const [search, setSearch] = useState(0);
  function onChange(event) {
    let search = event.target.value;
    setSearch(search);
    console.log("Search: " + search);
  }

  function searchAction() {
    console.log("Search button pressed: " + search);
  }

  return (
    <div>
      <h2>Search form</h2>
      <input type="text" placeholder="Search" onChange={onChange} />
      <button onClick={searchAction}>Search</button>
    </div>
  );
}

export default SearchForm;


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
