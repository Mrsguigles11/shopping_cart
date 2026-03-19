import { useEffect, useState } from "react";

let cachedData = null;

export function useShoppingApi() {
  const [data, setData] = useState(cachedData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cachedData) return;

    async function getData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (response.status !== 200) {
          throw new Error("server error");
        }
        const responseData = await response.json();
        cachedData = responseData;
        setData(responseData);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }
    getData();
  }, []);

  return { data, error, loading };
}
