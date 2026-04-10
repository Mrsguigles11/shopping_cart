import styles from "./Basket.module.css";
import { useOutletContext } from "react-router";
import "../../App.css";
import { BasketItem } from "./basketItem/BasketItem";

export function Basket() {
  const { basket, removeItem, editQuantity, totalPrice, total } = useOutletContext();

  return (
    <div className={`${styles.basket} content`}>
      <h1>Basket</h1>
      {basket.length === 0 ? (
        <div>
          Oops nothing here yet! Add items in the shop to review the basket
        </div>
      ) : (
        <div className={styles.basket_content}>
          <div>
            {basket.map((item) => {
              return (
                <BasketItem
                  item={item}
                  removeItem={removeItem}
                  editQuantity={editQuantity}
                  key={item.id}
                />
              );
            })}
          </div>
          <div className={styles.total}>
            <h2>Order Summary</h2>
            <p>${totalPrice}</p>
            <div className={styles.subtotal}>
              <p>Subtotal ({total} items)</p>
              <p>${totalPrice}</p>
            </div>
            <button className={`${styles.checkout} button`}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
