import { useCallback, useState } from "react";
import NavbarItems from "../../utils/NavbarItems";
import classes from "./Navbar.components.module.scss";
import Button from "../core/Button/Button.components";
import Icon from "../core/icon/Icon.components";

const Navbar = () => {
  const [active, setActive] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleActive = useCallback(
    (name: string, e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setActive(name);
      setIsMenuOpen(false);
    },
    []
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className={classes.navbar}>
      <Button
        value={<Icon alt={"navbar"} path={"/src/assets/icons/Hamburger.svg"} />}
        onClick={toggleMenu}
        className={classes["menu-toggle"]}
        ariaLabel="Toggle navigation"
      />

      <ul
        className={`${classes["navbar-links"]} ${
          isMenuOpen ? classes["menu-open"] : ""
        }`}
      >
        {NavbarItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              className={item.name === active ? classes.active : ""}
              onClick={(e) => handleActive(item.name, e)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
