import React, { useState } from "react";

const SearchParams = () => {
  const [
    /* current state= */ location,
    /* updater for state= */ setLocation
  ] = useState("Seatle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
