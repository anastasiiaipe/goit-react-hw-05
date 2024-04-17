import style from "./SearchForm.module.css";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const saveMovies = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <button className={style.searchBtn} type="submit">
          <FiSearch className={style.searchIcon} />
        </button>
        <input
          className={style.searchInput}
          type="text"
          name="search"
          placeholder="Search images and photos"
          onChange={saveMovies}
          value={query}
          autoComplete="off"
          autoFocus
        />
      </form>

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default SearchForm;
