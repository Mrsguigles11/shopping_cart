import styles from "./Home.module.css";
import { Link } from "react-router";
import "../../App.css";

export function Home() {
  return (
    <div className={`${styles.home} content`}>
      <div className={styles.home_content}>
        <div className={styles.home_content_txt}>
          <h2 className={styles.header}>Welcome to the Odin Shop</h2>
          <i>
            Come check out our totally real items in this totally real shop
          </i>
        </div>
        <Link to="/shop" className={styles.link}>Shop Now</Link>
      </div>
    </div>
  );
}
