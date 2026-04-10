import styles from "./Header.module.css";
import odinLogo from "../../img/odin_logo.png";
import { Link } from "react-router";
import { useState } from "react";

export default function Header({ total }) {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className={styles.header}>
      <div className={styles.heading_container}>
        <img src={odinLogo} alt="odin_shop_logo" className={styles.logo} />
        <h1 className={styles.heading}>ODIN</h1>
      </div>
      <div className={styles.links}>
        <Link
          className={currentPage === "home" ? styles.underlined : ""}
          to="/"
          onClick={() => setCurrentPage("home")}
        >
          Home
        </Link>
        <Link
          className={currentPage === "shop" ? styles.underlined : ""}
          to="/shop"
          onClick={() => setCurrentPage("shop")}
        >
          Shop
        </Link>
        <Link
          className={currentPage === "basket" ? styles.underlined : ""}
          to="/basket"
          onClick={() => setCurrentPage("basket")}
        >
          Basket ({total})
        </Link>
      </div>
    </div>
  );
}
