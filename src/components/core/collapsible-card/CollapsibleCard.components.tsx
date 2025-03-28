import { useCallback, useMemo, useState } from "react";
import styles from "./CollapsibleCard.components.module.scss";
import Icon from "../icon/Icon.components";
import Button from "../button/Button.components";
import Story from "../story/Story.components";
import CollapsibleCardProps from "../../../types/prop-types/CollapsibleCardProps";

const CollapsibleCard = ({
  title,
  description,
  imageUrl,
}: CollapsibleCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCollapse = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const buttonValue = useMemo(() => {
    return isOpen ? (
      <Icon
        alt={"Close"}
        path={"assets/icons/Close.svg"}
        className={styles.icon}
      />
    ) : (
      <Icon
        alt={"Open"}
        path={"assets/icons/Open.svg"}
        className={styles.icon}
      />
    );
  }, [isOpen]);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <Button
          onClick={toggleCollapse}
          className={styles.toggleButton}
          value={buttonValue}
          ariaLabel="Toggle collapse"
        ></Button>
      </div>
      {isOpen && (
        <div className={styles.content}>
          <Story
            title={title}
            description={description}
            imageUrl={imageUrl}
            buttonValue="Learn more"
            titleStyle={styles.contentTitle}
            imageStyle={styles.contentImage}
          />
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard;
