import OverlayCardProps from "../../../types/prop-types/OverlayCardProps";
import Button from "../button/Button.components";
import Title from "../title/Title.components";
import styles from "./OverlayCard.components.module.scss";

const OverlayCard = ({
  title,
  description,
  backgroundImage,
}: OverlayCardProps) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        {/* Add a semi-transparent cover */}
        <div className={styles.cover}></div>
        <div className={styles.content}>
          <Title text={title} className={styles.title} />
          <p className={styles.description}>{description}</p>
          <Button value=" Learn More" className={styles.button} />
        </div>
      </div>
    </div>
  );
};

export default OverlayCard;
