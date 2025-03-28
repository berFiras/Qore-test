import StoriesMock from "../../utils/StoriesMock";
import Story from "../core/story/Story.components";
import Title from "../core/title/Title.components";
import classes from "./MemberStories.components.module.scss";

const MemberStories = () => {
  return (
    <div className={classes["member-stories"]}>
      <Title
        text={"Member stories"}
        level={1}
        className={classes["member-stories-title"]}
      />
      <div className={classes["member-story-container"]}>
        {StoriesMock.map((story) => (
          <Story
            title={story.title}
            description={story.description}
            imageUrl={story.imageUrl}
            key={story.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MemberStories;
