import Header from "../Components/Header";
import "./country.css";
import arrowBack from "../assets/arrow-back-sharp.svg";
import useData from "../Context/useData";

function Country() {
  const {
    filterNsortData,
    selectedCountry,
    handleBackClick,
    handleCountryClick,
  } = useData();
  const { borders, currencies, languages, population } = selectedCountry;
  const filter = (border) =>
    filterNsortData.map((c) => c).filter((c) => c.alpha3Code === border);

  return (
    <>
      <Header />
      <div className="btn-sectn">
        <div onClick={handleBackClick} className="btn-btn">
          <ion-icon src={arrowBack}></ion-icon>
          Back
        </div>
      </div>
      <div className="country-cont">
        <div className="country-sectn">
          <img src={selectedCountry.flags.svg} alt="country flag" />
          <div className="country-word">
            <div className="country-word-one">
              <div>
                <h2>{selectedCountry.name}</h2>
                <p>
                  Native Name: <span>{selectedCountry.nativeName}</span>
                </p>
                <p>
                  Population: <span>{population.toLocaleString()}</span>
                </p>
                <p>
                  Region: <span>{selectedCountry.region}</span>
                </p>
                <p>
                  Sub Region: <span>{selectedCountry.subregion}</span>
                </p>
                <p>
                  Capital: <span>{selectedCountry.capital}</span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain:{" "}
                  <span>{selectedCountry.topLevelDomain[0]}</span>
                </p>
                <p>
                  Currencies: <span>{currencies[0].name}</span>
                </p>
                <p>
                  Languages: <span>{languages[0].name}</span>
                </p>
              </div>
            </div>{" "}
            <div className="country-word-two">
              <p>Border Countries:</p>{" "}
              <ul>
                {borders?.map((border, index) => {
                  if (border)
                    return (
                      <li
                        key={index}
                        className="border"
                        onClick={() => handleCountryClick(filter(border)[0])}
                      >
                        {filter(border)[0].name}
                      </li>
                    );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Country;
