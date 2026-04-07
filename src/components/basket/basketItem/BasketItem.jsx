import styles from "./BasketItem.module.css";

export function BasketItem({item, removeItem, editQuantity}) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.content_container}>
          <img
            src={item.image}
            alt={item.title + " image"}
            className={styles.img}
          />
          <div className={styles.details}>
            <h2>{item.title}</h2>
            <div>
              <div className={styles.quantity}>
                <button onClick={() => editQuantity("decrease", item.id)}>-</button>
                <div>{item.quantity}</div>
                <button onClick={() => editQuantity("increase", item.id)}>+</button>
              </div>
              <button className={styles.remove_button} onClick={() => removeItem(item.id, item.quantity)}>Remove</button>
            </div>
          </div>
        </div>
      </div>
      <h2>${item.quantity * item.price}</h2>
    </div>
  );
}
