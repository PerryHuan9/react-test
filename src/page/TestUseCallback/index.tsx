import React, { useCallback, useState, useRef } from "react";

let cacheCallback: Function | any = null;
const TestUseCallback: React.FC = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("我要上天");
  const inputRef = useRef(null);
  // 可以验证在依赖改变之前useCallback返回都是同一个函数
  const memoizedCallback = useCallback(() => {
    alert("memoizedCallback:" + text);
  }, [text]);
  if (!cacheCallback) {
    cacheCallback = memoizedCallback;
  }
  console.log("is Equal：", cacheCallback === memoizedCallback);
  return (
    <div>
      <button style={{ margin: "20px" }} onClick={() => setShow(!show)}>
        switch
      </button>
      <br />
      <input
        type="text"
        style={{ margin: "20px" }}
        ref={inputRef}
        onChange={function() {
          const element = inputRef.current || { value: "" };
          console.log("onChange", element.value);
          setText(element.value);
        }}
      />
      <br />
      <button style={{ margin: "20px" }} onClick={memoizedCallback}>
        alert
      </button>
    </div>
  );
};

export default TestUseCallback;
