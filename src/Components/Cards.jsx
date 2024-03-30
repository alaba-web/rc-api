import "../App.css";
import { useTheme } from "../Context/ThemeContext";
import useData from "../Context/useData";

function Card() {
  const { filterNsortData, handleCountryClick } = useData();
  const { theme } = useTheme();
  const displayCountry = () => {
    return filterNsortData.map((country) => (
      <div
        key={country.name}
        className={`card ${
          theme === "light" ? "light-sns-mode" : "dark-sns-mode"
        }`}
        onClick={() => handleCountryClick(country)}
      >
        <img src={country.flags.svg} alt="flag" />
        <div className="card-word">
          <h2 className="card-h">{country.name}</h2>
          <p className="card-p">
            Population: <span>{country.population.toLocaleString()}</span>{" "}
          </p>
          <p className="card-p">
            Region: <span>{country.region}</span>
          </p>
          <p className="card-p">
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      </div>
    ));
  };
  return <div className="card-container">{displayCountry()}</div>;
}

export default Card;
