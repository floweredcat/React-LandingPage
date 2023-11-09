import styles from "./styles.module.scss";
import DDIcon from "../../Assets/Images/DDIcon.svg";
import classnames from "classnames";
import { useState } from "react";

export const DropDownItem = ({ children, content, title }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <li className={styles.root} onClick={() => setIsOpened(!isOpened)}>
      <div>
        {title}
        <img
          className={classnames({ [styles.iconOpened]: isOpened })}
          src={DDIcon}
          alt={"DDIcon"}
        />
      </div>
      <p
        className={classnames(styles.content, {
          [styles.contentOpened]: isOpened,
        })}
      >
        {content}
      </p>
    </li>
  );
};
