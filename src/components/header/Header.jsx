import styles from "./Header.module.css";
import { Link } from "react-router";

export default function Header({total}) {
  return (
    <div className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/basket">Basket {total}</Link>
    </div>
  );
}
