import { useState } from "react ";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
  const navigate = useNavigate();

  const [Search, setSearch] = useState("");

  return (
    <form
      autoComplete="off"
      className="p-2 text-gray-400 mb-5 focus-within:text-gray-600 "
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search/${Search}`);
      }}
    >
      <label htmlFor="search-field" className={`sr-only`}>
        Search All Songs{" "}
      </label>
      <div className={`flex flex-row justify-start items-center`}>
        <FiSearch className="w-5 h-5 mx-5" />
        <input
          name={`search-field`}
          autoComplete="off"
          id={`search-field`}
          placeholder={`Search`}
          type="search"
          value={Search || ''}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className={`flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-5`}
        />
      </div>
    </form>
  );
};

export default Searchbar;
