import styles from "./ShopItem.module.css";
import { useState } from "react";

export function ShopItem({ data, addItem }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{data.title}</h1>
      <img
        src={data.image}
        alt={data.title + " image"}
        className={styles.image}
      />
      <p className={styles.text}>{data.price}</p>
      <button onClick={() => addItem(data.id, quantity, data.title, data.image)}>
        Add to Basket
      </button>
      <div>
        <button
          onClick={() => {
            if (quantity !== 1) {
              setQuantity((prev) => prev - 1);
            }
          }}
        >
          -
        </button>
        <input type="number" name="quantity" value={quantity} />
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
}
