import styles from "./Shop.module.css";
import "../../App.css";
import { useShoppingApi } from "../../data/products";
import { Item } from "./item/Item";
import { useOutletContext } from "react-router";

export function Shop() {
  const { data, error } = useShoppingApi();
  const {addItem} = useOutletContext();;

  return (
    <div className={`${styles.shop} content`}>
      {error ? <div>{error}</div> : <></>}
      <div className={styles.container}>
      {data ? data.map((item) => {
        return <Item data={item} key={item.id} addItem={addItem}/>
      }) : <div className={styles.loading}>Loading...</div>}
      </div>
    </div>
  );
}
