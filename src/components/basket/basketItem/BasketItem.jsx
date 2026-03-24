import styles from "./BasketItem.module.css";

export function BasketItem({item, removeItem, editQuantity}) {
  return (
    <div className={styles.item}>
      <div>{item.title}</div>
      <img
        src={item.image}
        alt={item.title + " image"}
        className={styles.img}
      />
      <button onClick={() => editQuantity("decrease", item.id)}>-</button>
      <div>{item.quantity}</div>
      <button onClick={() => editQuantity("increase", item.id)}>+</button>
      <button onClick={() => removeItem(item.id, item.quantity)}>Remove</button>
    </div>
  );
}
