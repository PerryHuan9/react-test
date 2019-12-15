import React, { useContext } from "react";
import { ThemeContext } from "../../utils/context";

const TestUseContext: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>
        color:
        <span
          style={{
            display: "inline-block",
            width: "100px",
            height: "20px",
            backgroundColor: theme.color
          }}
        ></span>
      </p>
      <p>
        backgroundColor:
        <span
          style={{
            display: "inline-block",
            width: "100px",
            height: "20px",
            backgroundColor: theme.backgroundColor
          }}
        ></span>
      </p>
    </div>
  );
};

export default TestUseContext;
