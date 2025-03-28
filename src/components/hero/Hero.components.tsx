import Button from "../core/button/Button.components";
import Title from "../core/title/Title.components";
import classes from "./Hero.components.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes["hero-content"]}>
        <div className={classes["hero-details"]}>
          <Title
            text={"Central Texas Fly Fishing"}
            level={1}
            className={classes["hero-title"]}
          />
          <p className={classes["hero-description"]}>
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <Button value="Get Started" className={classes["hero-button"]} />
        </div>
        <div className={classes["hero-image"]}>
          <img src="assets/images/hero.jpeg" alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
