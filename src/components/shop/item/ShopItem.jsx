import styles from "./ShopItem.module.css";
import { useState } from "react";

export function ShopItem({ data, addItem }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.img_heading_container}>
        <img
          src={data.thumbnail}
          alt={data.title + " image"}
          className={styles.image}
        />
        <h1 className={styles.heading}>{data.title}</h1>
        <i className={styles.description}>{data.description}</i>
      </div>
      <div>
        <p className={styles.price}>${data.price}</p>
        <div className={styles.buttons}>
          <button
            onClick={() =>
              addItem(data.id, quantity, data.title, data.thumbnail, data.price)
            }
            className={`${styles.add_to_basket} button`}
          >
            Add to Basket
          </button>
          <div className={styles.quantity}>
            <button
              onClick={() => {
                if (quantity !== 1) {
                  setQuantity((prev) => prev - 1);
                }
              }}
              className={styles.quantity_button}
            >
              -
            </button>
            <div>{quantity}</div>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className={styles.quantity_button}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
