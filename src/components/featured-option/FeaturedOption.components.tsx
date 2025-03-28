import CollapsibleCard from "../core/collapsible-card/CollapsibleCard.components";
import classes from "./FeaturedOption.components.module.scss";
import OptionsMock from "../../utils/OptionsMock";
import Title from "../core/title/Title.components";
import useScreenSize from "../../hooks/use-screen-size/useScreenSize.hooks";
import OverlayCard from "../core/overlay-card/OverlayCard.components";

const FeaturedOption = () => {
  const isSmallScreen = useScreenSize(768);

  return isSmallScreen ? (
    <div className={classes["featured-option"]}>
      <div className={classes["featured-option-container-small"]}>
        <Title
          text={"Featured options"}
          level={1}
          className={classes["feature-option-title"]}
        />
        {OptionsMock.map((option) => (
          <OverlayCard
            key={option.id}
            title={option.title}
            description={option.description}
            backgroundImage={option.imageUrl}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className={classes["featured-option"]}>
      <div className={classes["featured-option-container"]}>
        <Title
          text={"Featured options"}
          level={1}
          className={classes["feature-option-title"]}
        />
        {OptionsMock.map((option) => (
          <CollapsibleCard
            key={option.id}
            title={option.title}
            description={option.description}
            imageUrl={option.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedOption;
