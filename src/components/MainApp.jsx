import { Link } from "react-router-dom";
import { Features } from "./Features";
import { Header } from "./Header";
import styles from "./MainApp.module.css";
import { Media } from "./Media";

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

      <Media />
      <Features />

      <div className={`${styles["references"]} container`}>
        <div className={`${styles["references__container"]}`}>
          <div className={`${styles["reference__content"]}`}>
            <div className={`${styles["reference__title"]}`}>
              <span>Brand of the Week</span>
              <h2>Dr. Oreo Coke</h2>
            </div>
            <p>
              Dr. Oreo Coke, a renowned MilkyWay aesthetics doctor, combines
              science and creativity to deliver youthful, glowing skin. Her Anna
              Sui skincare line embodies this philosophy with luxurious,
              high-performance formulas that promote radiant, healthy skin
              without invasive treatments.
            </p>

            <Link to={`/to`} className={`${styles["reference__btn"]}`}>
              Shop Now
            </Link>
          </div>
          <div className={`${styles["reference__img"]}`}>
            <img src="../../public/img/model1.jpg" alt="Makeup" />
          </div>
        </div>
        <div
          className={`${styles["references__container"]} ${styles["references__container-2"]}`}
        >
          <div className={`${styles["reference__img"]}`}>
            <img src="../../public/img/model2.jpg" alt="Makeup" />
          </div>
          <div className={`${styles["reference__content"]}`}>
            <div className={`${styles["reference__title"]}`}>
              <span>The Best</span>
              <h2>Beauty List</h2>
            </div>
            <p>
              Explore our collection of expertly crafted skincare products,
              designed to nurture and enhance your natural beauty. From
              rejuvenating formulas to innovative solutions, each product is
              made to help you achieve a healthy, glowing complexion.
            </p>

            <Link to={`/shop`} className={`${styles["reference__btn"]}`}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
