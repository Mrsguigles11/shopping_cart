import { useState } from "react";

export function useBasketFunc() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  function addItem(id, title, image) {
    let newBasket = [...basket];

    const hasItem = newBasket.some((item) => item.id === id);

    if (!hasItem) {
      newBasket.push({ id: id, quantity: 1, title: title, image: image });
    }

    if (hasItem) {
      newBasket.map((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
    }

    setBasket(newBasket);
    setTotal((prev) => prev + 1);
  }

  return { total, addItem, basket };
}
