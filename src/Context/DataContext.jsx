import { createContext, useEffect, useState } from "react";
import data from "../../data.json";
const DataContext = createContext();
function DataProvider({ children }) {
  const [jsonData, setJsonData] = useState(data);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filterData, setFilterData] = useState(jsonData);
  const [filterNsortData, setFilterNsortData] = useState([...jsonData]);
  const sortOption = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleCountryClick = (item) => {
    setSelectedCountry(item);
  };

  const handleBackClick = (item) => {
    setSelectedCountry(null);
  };
  return (
    <DataContext.Provider
      value={{
        jsonData,
        setJsonData,
        search,
        selectedCountry,
        setSelectedCountry,
        handleCountryClick,
        handleBackClick,
        setSearch,
        sort,
        setSort,
        sortOption,
        filterData,
        setFilterData,
        filterNsortData,
        setFilterNsortData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider, DataContext };
