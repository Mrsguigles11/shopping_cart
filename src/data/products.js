import { useEffect, useState } from "react";

let cachedData = null;

export function useShoppingApi() {
  const [data, setData] = useState(cachedData);
  const [error, setError] = useState(null);

  const getData = async () => {
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("server error");
      }
      let responseData = await response.json();
      responseData = responseData.products;
      cachedData = responseData;
      setData(responseData);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (cachedData) return;
    getData();
  }, []);

  return { data, error, getData };
}
