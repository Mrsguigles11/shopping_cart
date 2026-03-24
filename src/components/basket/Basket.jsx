import styles from "./Basket.module.css";
import { useOutletContext } from "react-router";
import "../../App.css";
import { BasketItem } from "./basketItem/BasketItem";

export function Basket() {
  const { basket, removeItem, editQuantity, totalPrice } = useOutletContext();

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
            <BasketItem
              item={item}
              removeItem={removeItem}
              editQuantity={editQuantity}
              key={item.id}
            />
          );
        })
      )}
      <h2>{totalPrice}</h2>
    </div>
  );
}
