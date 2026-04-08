import { useState } from "react";

export function useBasketFunc() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function addItem(id, quantity, title, image, price) {
    let newBasket = [...basket];

    const hasItem = newBasket.some((item) => item.id === id);

    if (!hasItem) {
      newBasket.push({
        id: id,
        quantity: quantity,
        title: title,
        image: image,
        price: price,
      });
    }

    if (hasItem) {
      newBasket.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity + quantity;
        }
      });
    }

    setTotalPrice((prev) => prev + price * quantity);
    setBasket(newBasket);
    setTotal((prev) => prev + quantity);
  }

  function removeItem(id, quantity) {
    let newBasket = [...basket];

    newBasket.map((item) => {
      if (item.id === id) {
        setTotalPrice(
          (prev) => Math.round((prev - item.price * quantity) * 100) / 100,
        );
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
        if (item.id === id) {
        item.quantity++
        setTotalPrice((prev) => Math.round((prev + item.price) * 100) / 100);
        }
      });
      setTotal((prev) => prev + 1);
    }
    if (type === "decrease") {
      newBasket.map((item) => {
        if (item.id === id && item.quantity > 1) {
          item.quantity--;
          setTotalPrice((prev) => Math.round((prev - item.price) * 100) / 100);
        }
      });
      setTotal((prev) => (prev > 1 ? prev - 1 : prev));
    }

    setBasket(newBasket);
  }

  return { total, addItem, basket, removeItem, editQuantity, totalPrice };
}
