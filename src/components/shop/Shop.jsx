import styles from "./Shop.module.css";
import "../../App.css";
import { useShoppingApi } from "./data/products";

export function Shop() {
  const { data, error, loading } = useShoppingApi();

  return (
    <div className={`${styles.shop} content`}>
      <h1>Shop</h1>
    </div>
  );
}
