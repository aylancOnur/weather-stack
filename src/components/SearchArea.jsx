import React from "react";

const SearchArea = ({handleSubmit,city,handleChange}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={city}
        onChange={handleChange}
        type="text"
        placeholder="City..."
      />
      <button type="submit">Searh</button>
    </form>
  );
};

export default SearchArea;
