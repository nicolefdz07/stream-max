import { useContext } from "react";
import SearchProgramsContext from "../context/SearchProgramsContext";
import {  CiSearch } from "react-icons/ci";

export default function SearchPage() {
  const { term, setTerm } = useContext(
    SearchProgramsContext
  );

  return (
    <form className="search-form" onSubmit={e => {
      e.preventDefault();
    }}>
      <div className="search-bar-wrapper">
        <CiSearch className="search-icon" />
        <input
          className="search-bar"
          type="text"
          value={term}
          onChange={e=> setTerm(e.target.value)}
          placeholder="Find movies, shows and more"
        />
      </div>
    </form>
  );
}
