/** @format */

import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import api from "../../lib/api";

import searchIcon from "./Search Icon.svg";

import "./SearchPopup.css";

export default function SearchPopup(props) {
  const [state, setState] = useState({
    value: "",
    open: false,
  });

  const [search, setSearchResults] = useState({
    results: false,
    keyword: false,
    loading: false,
  });

  function handleChange(event) {
    setState({ value: event.target.value });
  }

  async function handleSearch(e) {
    e.preventDefault();
    setSearchResults({
      ...search,
      loading: true,
    });
    const searchResults = await api.get(`/search/${state.value}`);
    setSearchResults({
      results: searchResults.data.results || true,
      keyword: searchResults.data.keyword,
      loading: false,
    });
  }

  return (
    <>
      {props.device === "mobile" ? (
        <>
          <form className='searchBar' onSubmit={handleSearch} action='/search_results'>
            <input required id='fullName' type='text' placeholder='Search' value={state.value} onChange={handleChange} />
            <button className='searchSubmit' type='submit'>
              <img src={searchIcon} alt='search icon'></img>
            </button>
          </form>

          {search.results && search.results.length >= 0 ? (
            <Redirect
              to={{
                pathname: "/search_results",
                state: { search: search },
              }}
            />
          ) : null}
        </>
      ) : (
        <div className='searchPopUpBG'>
          <div className='searchPopUp'>
            <form className='searchBar' onSubmit={handleSearch} action='/search_results'>
              <input required id='fullName' type='text' placeholder='Search' value={state.value} onChange={handleChange} />
              <button className='searchSubmit' type='submit'>
                <img src={searchIcon} alt='search icon'></img>
              </button>
            </form>

            {search.loading ? <div className='loadingSpinner'>loading...</div> : null}

            {search.results && search.results.length >= 0 ? (
              <Redirect
                to={{
                  pathname: "/search_results",
                  state: { search: search },
                }}
              />
            ) : null}
            {search.results && search.results.length >= 0 ? props.toggle() : null}
            <span onClick={props.toggle} className='searchClose'>
              &times;
            </span>
          </div>
        </div>
      )}
    </>
  );
}
