import { Button } from "../Button/Button";
import styles from "./styles.module.scss";
import MainPhone from "../../Assets/Images/mainPhone.png";

export const MainSection = () => {
  function handleScroll() {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <h1>Эпические миры – с Galaxy S23 Ultra</h1>
        <p>
          Больше свободы для реализации ваших творческих способностей в режиме
          Nightograph
        </p>
        <Button onclick={handleScroll} />
      </div>
      <img src={MainPhone} alt={"MainPhone"} className={styles.phone} />
    </section>
  );
};
