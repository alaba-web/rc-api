import "./App.css";
import Card from "./Components/Cards";
import Header from "./Components/Header";
import SearchnSort from "./Components/SearchNsort";
import { DataProvider } from "./Context/DataContext";
import { useTheme } from "./Context/ThemeContext";
import useData from "./Context/useData";
import Country from "./Pages/Country";

function App() {
  const { theme } = useTheme();
  const { selectedCountry } = useData();
  return (
    <div className={theme === "light" ? "light-mode" : "dark-mode"}>
      {selectedCountry ? (
        <Country />
      ) : (
        <div>
          <Header />
          <SearchnSort />
          <Card />
        </div>
      )}
    </div>
  );
}

export default App;
