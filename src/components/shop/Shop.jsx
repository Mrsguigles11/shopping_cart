import styles from "./Shop.module.css";
import "../../App.css";
import { useShoppingApi } from "../../data/products";
import { ShopItem } from "./item/ShopItem";
import { useOutletContext } from "react-router";

export function Shop() {
  const { data, error, getData } = useShoppingApi();
  const { addItem } = useOutletContext();

  return (
    <div className={`${styles.shop} content`}>
      <div className={styles.container}>
        {error ? (
          <div className={styles.error}>
          <div>Oops something went wrong!</div>
          <button onClick={getData} className={`${styles.error_button} button`}>Try Again</button>
          </div>
        ) : (
          <></>
        )}
        {data ? (
          data.map((item) => {
            return <ShopItem data={item} key={item.id} addItem={addItem} />;
          })
        ) : (
          <></>
        )}
        {!data && !error ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
