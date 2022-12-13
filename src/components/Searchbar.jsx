import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autocomplete="off" className="p-2 text-gray-400 focus-within:text-gray-600" action="">
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4">
        </FiSearch>
        <input
          autocomplete="off"
          type="search"
          name="search-field"
          id="search-field"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => { setsearchTerm(e.target.value); }}
          className="flex-1 bg-transparent border-none outline-none placeholder:gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
};


export default Searchbar;
