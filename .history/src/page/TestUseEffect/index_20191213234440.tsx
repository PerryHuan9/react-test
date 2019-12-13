import React, { useState, useEffect } from "react";

const SHOW_CONTENT = [
  "黄河之水天上来，奔流到海不复回",
  "问君能有几多愁，恰似一江春水向东流",
  "人有悲欢离合，月有阴晴圆缺"
];
const TestUseEffect: React.FC = () => {
  const [order, setOrder] = useState(0);
  function() {
    useEffect(() => {
      const interval = setInterval(() => {
        if (order < SHOW_CONTENT.length - 1) {
          setOrder(order + 1);
        } else {
          setOrder(0);
        }
      }, 1000);
      return () => {
        console.log("清除setInterval");
        clearInterval(interval);
      };
    }, [order]);
  }
 
  return <div>{SHOW_CONTENT[order]}</div>;
};

export default TestUseEffect;
