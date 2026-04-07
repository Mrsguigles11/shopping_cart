import { useEffect, useState } from "react";

let cachedData = null;

export function useShoppingApi() {
  const [data, setData] = useState(cachedData);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cachedData) return;

    async function getData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        // const response = await fetch("https://dummyjson.com/products")
        if (response.status !== 200) {
          throw new Error("server error");
        }
        let responseData = await response.json();
        // responseData = responseData.products
        cachedData = responseData;
        setData(responseData);
        console.log(responseData)
      } catch (err) {
        setError(err);
      }
    }
    getData();
  }, []);

  return { data, error };
}
