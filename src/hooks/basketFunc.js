import { useState } from "react"

export function useBasketFunc() {
    // const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);

    function addItem() {


        setTotal((prev) => prev + 1)
        console.log(total)
    }

    return {total, addItem}
}