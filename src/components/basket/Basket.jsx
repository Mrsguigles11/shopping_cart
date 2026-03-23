import styles from "./Basket.module.css";
import { useOutletContext } from "react-router";
import "../../App.css";

export function Basket() {
  const { basket, removeItem } = useOutletContext();

  return (
    <div className={`${styles.basket} content`}>
      <h1>Basket</h1>
      {basket.length === 0 ? (
        <div>
          Oops nothing here yet! Add items in the shop to review the basket
        </div>
      ) : (
        basket.map((item) => {
          return (
            <div className={styles.item}>
              <div>{item.title}</div>
              <img
                src={item.image}
                alt={item.title + " image"}
                className={styles.img}
              />
              <div>{item.quantity}</div>
              <button onClick={() => removeItem(item.id, item.quantity)}>Remove</button>
            </div>
          );
        })
      )}
    </div>
  );
}
