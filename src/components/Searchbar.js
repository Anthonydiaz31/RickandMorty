import React from "react";

function Searchbar({ setFilter,setPageCount, setPage }) {
  
  function handleChange(e) {
    let { value } = e.target;
    setFilter(value);
    setPageCount(1);
    setPage(1)
    e.preventDefault()
  }

  return (
    <div className="Search-Wrap">
      <input type="text" placeholder="Search" onChange={handleChange} />
      <button type="submit"> </button>
    </div>
  );
}

export default Searchbar;
