import React from "react";
import { useOrder } from "../../hooks";

const SAD_NOVELS = [
  "念天地之悠悠，独怆然而涕下",
  "夕阳西下，断肠人在天涯",
  "万里悲秋常作客，百年多病独登台",
  "问君能有几多愁，恰似一江春水向东流"
];

const EXCITED_NOVELS = [
  "安能摧眉折腰事权贵，使我不得开心颜",
  "但愿人长久，千里共婵娟",
  "乘风破浪会有时，直挂云帆济沧海"
];

const TestCustomHook: React.FC = () => {
  const order = useOrder(4, 1000);
  const order2 = useOrder(3, 2000);
  return (
    <div>
      <p>{SAD_NOVELS[order]}</p>
      <p>{EXCITED_NOVELS[order2]}</p>
    </div>
  );
};

export default TestCustomHook;
