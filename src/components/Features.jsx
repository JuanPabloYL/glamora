import { GiEarthAmerica, GiRecycle, GiThreeLeaves } from "react-icons/gi";

import styles from "./Features.module.css";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export const Features = () => {
  return (
    <div className={`${styles["features"]} container`}>
      <h2 className={`${styles["features__title"]}`}>Why be yours?</h2>
      <div className={`${styles["features__container"]}`}>
        <div className={`${styles["feature"]}`}>
          <div className={`${styles["feature__img"]}`}>
            <GiThreeLeaves />

            <h3>Clean Skincare</h3>
          </div>

          <div>
            <p>
              Clean and natural skincare with safe and transparent ingredients
            </p>
          </div>
        </div>
        {/* Feature */}
        <div className={`${styles["feature"]}`}>
          <div className={`${styles["feature__img"]}`}>
            <GiEarthAmerica />

            <h3>European Delivery</h3>
          </div>

          <div>
            <p>Fast delivery options with tracking No EU import duties</p>
          </div>
        </div>

        {/* Authorized Retailer */}

        <div className={`${styles["feature"]}`}>
          <div className={`${styles["feature__img"]}`}>
            <GiRecycle />

            <h3>Sustainability</h3>
          </div>

          <div>
            <p>
              Our signature shipping boxes are fully recyclable and
              biodegradable
            </p>
          </div>
        </div>
        {/* Features */}

        <div className={`${styles["feature"]}`}>
          <div className={`${styles["feature__img"]}`}>
            <IoShieldCheckmarkOutline />

            <h3>Authorized Retailer</h3>
          </div>

          <div>
            <p>We are an authorized retailer for all the brands we carry</p>
          </div>
        </div>
      </div>
    </div>
  );
};
