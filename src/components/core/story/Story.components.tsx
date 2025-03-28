import useScreenSize from "../../../hooks/use-screen-size/useScreenSize.hooks";
import StoryProps from "../../../types/prop-types/StoryProps";
import Button from "../button/Button.components";
import Title from "../title/Title.components";
import classes from "./Story.components.module.scss";

const Story = (props: StoryProps) => {
  const {
    title,
    description,
    imageUrl,
    buttonValue,
    titleStyle,
    imageStyle,
    descriptionStyle,
  } = props;
  const isSmallScreen = useScreenSize(768);

  return !isSmallScreen ? (
    <div className={classes.story}>
      <div className={imageStyle ?? classes["story-image"]}>
        <img
          src={imageUrl}
          alt="Story-image"
          className={imageStyle ?? classes["story-image"]}
        />
      </div>
      <div className={classes["story-details"]}>
        <Title text={title} className={titleStyle ?? classes["story-title"]} />
        <p className={descriptionStyle ?? classes["story-description"]}>
          {description}
        </p>
        <Button
          value={buttonValue ?? "Read more"}
          className={classes["story-button"]}
        />
      </div>
    </div>
  ) : (
    <div className={classes["story-small"]}>
      <Title text={title} className={classes["story-title-small"]} />
      <div className={classes["story-details-small"]}>
        <div className={classes["story-image-small"]}>
          <img
            src={imageUrl}
            alt="Story-image"
            className={classes["story-image-small"]}
          />
        </div>
        <p className={classes["story-description-small"]}>{description}</p>
      </div>
      <Button value="Read more" className={classes["story-button-small"]} />
    </div>
  );
};

export default Story;
