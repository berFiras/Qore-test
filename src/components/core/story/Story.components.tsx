import useScreenSize from "../../../hooks/use-screen-size/useScreenSize.hooks";
import Button from "../button/Button.components";
import Title from "../title/Title.components";
import classes from "./Story.components.module.scss";

interface StoryProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Story = (props: StoryProps) => {
  const isSmallScreen = useScreenSize(768);

  const { title, description, imageUrl } = props;
  return !isSmallScreen ? (
    <div className={classes.story}>
      <div className={classes["story-image"]}>
        <img
          src={imageUrl}
          alt="Story-image"
          className={classes["story-image"]}
        />
      </div>
      <div className={classes["story-details"]}>
        <Title text={title} className={classes["story-title"]} />
        <p className={classes["story-description"]}>{description}</p>
        <Button value="Read more" className={classes["story-button"]} />
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
