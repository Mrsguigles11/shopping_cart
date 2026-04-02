import styles from "./Shop.module.css";
import "../../App.css";
import { useShoppingApi } from "../../data/products";
import { ShopItem } from "./item/ShopItem";
import { useOutletContext } from "react-router";

export function Shop() {
  const { data, error } = useShoppingApi();
  const {addItem} = useOutletContext();;

  return (
    <div className={`${styles.shop} content`}>
      {error ? <div>{error}</div> : <></>}
      <div className={styles.container}>
      {data ? data.map((item) => {
        return <ShopItem data={item} key={item.id} addItem={addItem}/>
      }) : <div className={styles.loading}>Loading...</div>}
      </div>
    </div>
  );
}
