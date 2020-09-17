/** @format */

import React, { useState } from "react";

import "./SearchPopup.css";

export default function SearchPopup(props) {
  const [state, setState] = useState({
    value: "essence",
    open: false,
  });

  console.log(props);

  function handleChange(event) {
    setState({ value: event.target.value });
  }

  function handleSubmit(event) {}

  return (
    <div className='searchPopUpBG'>
      <div className='searchPopUp'>
        <form className='searchBar' onSubmit={handleSubmit} action='/search_results'>
          <input id='fullName' type='text' placeholder='Search' value={state.value} onChange={handleChange} />
          <button className='searchSubmit' type='submit'>
            <i class='fas fa-search'></i>
          </button>
        </form>
        <span onClick={props.toggle} className='searchClose'>
          &times;
        </span>
      </div>
    </div>
  );
}
