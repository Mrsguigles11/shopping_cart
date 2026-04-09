import styles from "./Header.module.css";
import { Link } from "react-router";
import { useState } from "react";

export default function Header({total}) {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>The Odin Shop</h1>
      <div className={styles.links}>
        <Link className={currentPage === "home" ? styles.underlined : ""} to="/" onClick={() => setCurrentPage("home")}>Home</Link>
        <Link className={currentPage === "shop" ? styles.underlined : ""} to="/shop" onClick={() => setCurrentPage("shop")}>Shop</Link>
        <Link className={currentPage === "basket" ? styles.underlined : ""} to="/basket" onClick={() => setCurrentPage("basket")}>Basket ({total})</Link>
      </div>
    </div>
  );
}
