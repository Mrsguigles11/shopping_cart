import styles from "./Shop.module.css";
import "../../App.css";
import { useShoppingApi } from "../../data/products";
import { Item } from "./item/Item";

export function Shop() {
  const { data, error } = useShoppingApi();

  return (
    <div className={`${styles.shop} content`}>
      {error ? <div>{error}</div> : <></>}
      <div className={styles.container}>
      {data ? data.map((item) => {
        return <Item data={item} />
      }) : <div>Loading...</div>}
      </div>
    </div>
  );
}
