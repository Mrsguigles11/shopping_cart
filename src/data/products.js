import { useEffect, useState } from "react";

export function useShoppingApi() {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (response.status !== 200) {
          throw new Error("server error");
        }
        const responseData = await response.json();
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
