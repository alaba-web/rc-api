import { useTheme } from "../Context/ThemeContext";
import "./header.css";
import lightIcon from "../assets/moon-outline.svg";
import darkIcon from "../assets/moon-sharp.svg";
function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`h-container ${
        theme === "light" ? "light-h-mode" : "dark-h-mode"
      }`}
    >
      <div>Where in the world?</div>
      <div onClick={toggleTheme} className="mode">
        <ion-icon
          src={theme === "light" ? lightIcon : darkIcon}
          size="small"
          className={theme === "light" ? "icon-dark" : "icon-light"}
        ></ion-icon>
        {theme === "light" ? "Light" : "Dark"} Mode
      </div>
    </div>
  );
}

export default Header;
