import { Header } from "./Header";
import styles from "./MainApp.module.css";

export const MainApp = () => {
  return (
    <>
      <Header />
      <section className={`container ${styles["introduction"]}`}>
        <h2 className={`${styles["introduction__title"]}`}>
          Embrace and celebrate the skin you're in.
        </h2>
        <p className={`${styles["introduction__text"]}`}>
          Our mission is to honor and uplift melanin-rich skin, giving it the
          love and care it truly deserves. It's not just about skincare—it's
          about helping you reveal the radiant beauty within.
        </p>
        <p className={`${styles["introduction__extra"]}`}>
          ✨ Everyone needs a Iil' Buttah – baby ✨
        </p>
      </section>
    </>
  );
};
