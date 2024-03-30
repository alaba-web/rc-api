import { useState } from "react";
import "../App.css";
import { useTheme } from "../Context/ThemeContext";
import useData from "../Context/useData";
import searchIcon from "../assets/search-sharp.svg";
function SearchnSort() {
  const {
    search,
    setSearch,
    jsonData,
    sort,
    setSort,
    setFilterNsortData,
    sortOption,
  } = useData();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const handleChange = (e) => {
    const value = e.target.value;

    setSearch(value);
    let filtered = jsonData.filter((counrty) =>
      counrty.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilterNsortData(filtered);
  };

  const handleSort = (value) => {
    setSort(value);
    let sorted = jsonData
      .filter((country) => country.region === value)
      .sort((a, b) => a.name.localeCompare(b.name));
    setFilterNsortData(sorted);
  };

  const handleToggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    handleSort(option);
    setIsOpen(false);
  };

  return (
    <div className="search-sort-box">
      <div
        className={`search ${
          theme === "light" ? "light-sns-mode" : "dark-sns-mode"
        }`}
      >
        <ion-icon src={searchIcon} size="small"></ion-icon>
        <input
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={handleChange}
          placeholder="Search for a country..."
          className={` ${theme === "light" ? "light-mode" : "dark-mode"}`}
        />
      </div>
      <div
        className={`sort ${
          theme === "light" ? "light-sns-mode" : "dark-sns-mode"
        }`}
      >
        <div
          onClick={handleToggleDropDown}
          className={`region ${
            theme === "light" ? "light-sns-mode" : "dark-sns-mode"
          }`}
        >
          <span id="text">{selectedOption || "Sort by Region"}</span>
          <ion-icon
            name={isOpen ? "chevron-up-outline" : "chevron-down-outline"}
          ></ion-icon>
        </div>

        {isOpen && (
          <ul className="region-list ">
            {sortOption.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelectedOption(option)}
                className={`region-list-region ${
                  theme === "light" ? "light-s-mode" : "dark-s-mode"
                }`}
              >
                <span className="region-text">{option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchnSort;
