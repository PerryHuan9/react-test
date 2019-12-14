import { useEffect, useState } from "react";

const useOrder = (length: number, interval: number = 1000) => {
  const [order, setOrder] = useState(0);
  useEffect(() => {
    const handler = setInterval(() => {
      if (order < length - 1) {
        setOrder(order + 1);
      } else {
        setOrder(0);
      }
    }, interval);
    return () => {
      console.log("清除setInterval");
      clearInterval(handler);
    };
  }, [order, length, interval]);
  return order;
};

export default useOrder;
