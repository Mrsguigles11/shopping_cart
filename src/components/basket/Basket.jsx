import styles from "./Basket.module.css";
import { useOutletContext } from "react-router";
import "../../App.css";

export function Basket() {
  const { basket } = useOutletContext();

  return (
    <div className={`${styles.basket} content`}>
      <h1>Basket</h1>
      {basket.map((item) => {
        return (
            <div className={styles.item}>
                <div>{item.title}</div>
                <img src={item.image} alt={item.title + " image"} className={styles.img}/>
                <div>{item.quantity}</div>
            </div>
        );
      })}
    </div>
  );
}
