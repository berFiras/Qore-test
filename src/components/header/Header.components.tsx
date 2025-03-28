import Icon from "../core/icon/Icon.components";
import Navbar from "../navbar/Navbar.components";
import classes from "./Header.components.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-container"]}>
        <div className={classes["header-left"]}>
          <div className={classes["header-logo"]}>
            <Icon
              path="/src/assets/icons/HeaderIcon.svg"
              alt="Logo"
              className={classes["header-logo-image"]}
            />
          </div>
          <div className={classes["header-title"]}>
            Central Texas Fly Fishing
          </div>
        </div>
        <div className={classes["header-right"]}>
          <Navbar />
          <Icon path="/src/assets/icons/ThemeIcon.svg" alt="Theme" className={classes["theme-icon"]} />
        </div>
      </div>
    </header>
  );
};

export default Header;
