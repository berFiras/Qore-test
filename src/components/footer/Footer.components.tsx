import FooterNavigationItems from "../../utils/FooterNavigationItems";
import Icon from "../core/icon/Icon.components";
import classes from "./Footer.components.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-content"]}>
        <div className={classes["footer-navigation-items"]}>
          <Icon
            path="assets/icons/FooterIcon.svg"
            alt="Logo"
            className={classes["footer-logo-image"]}
          />
          <div className={classes["footer-navigation-links"]}>
            {FooterNavigationItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className={classes["footer-navigation-link"]}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className={classes["footer-icons"]}>
          <Icon
            alt="Instagram"
            path="assets/icons/Facebook.svg"
            className={classes.icon}
          />
          <Icon
            alt="Facebook"
            path="assets/icons/Instagram.svg"
            className={classes.icon}
          />
          <Icon
            alt="YouTube"
            path="assets/icons/LinkedIn.svg"
            className={classes.icon}
          />
        </div>
      </div>
      <div className={classes["footer-copyright"]}>
        &copy; 2024 Central Texas Fly Fishing All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
