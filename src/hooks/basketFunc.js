import { useState } from "react";

export function useBasketFunc() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  function addItem(id, quantity, title, image) {
    let newBasket = [...basket];

    const hasItem = newBasket.some((item) => item.id === id);

    if (!hasItem) {
      newBasket.push({
        id: id,
        quantity: quantity,
        title: title,
        image: image,
      });
    }

    if (hasItem) {
      newBasket.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity + quantity;
        }
      });
    }

    setBasket(newBasket);
    setTotal((prev) => prev + quantity);
  }

  function removeItem(id, quantity) {
    let newBasket = [...basket];

    newBasket.map((item) => {
      if (item.id === id) {
        newBasket.splice(newBasket.indexOf(item), 1);
      }
    });

    setBasket(newBasket);
    setTotal((prev) => prev - quantity);
  }

  function editQuantity(type, id) {
    let newBasket = [...basket];

    if (type === "increase") {
      newBasket.map((item) => {
        item.id === id ? item.quantity++ : item;
      });
      setTotal((prev) => prev + 1);
    }
    if (type === "decrease") {
      newBasket.map((item) => {
        item.id === id && item.quantity > 1 ? item.quantity-- : item;
      });
      setTotal((prev) => prev > 1 ? prev - 1 : prev);
    }

    setBasket(newBasket);
  }

  return { total, addItem, basket, removeItem, editQuantity };
}
