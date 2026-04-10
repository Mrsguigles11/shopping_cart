import styles from "./BasketItem.module.css";

export function BasketItem({ item, removeItem, editQuantity }) {
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <img src={item.image} alt={item.title + " image"} />
        <div className={styles.details}>
          <p className={styles.item_title}>{item.title}</p>
          <div>
            <div className={styles.quantity}>
              <button
                onClick={() => editQuantity("decrease", item.id)}
                className={styles.quantity_button}
              >
                -
              </button>
              <div>{item.quantity}</div>
              <button
                onClick={() => editQuantity("increase", item.id)}
                className={styles.quantity_button}
              >
                +
              </button>
            </div>
            <button
              className={styles.remove_button}
              onClick={() => removeItem(item.id, item.quantity)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <p className={styles.item_price}>
        ${Math.round(item.quantity * item.price * 100) / 100}
      </p>
    </div>
  );
}
