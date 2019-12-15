import React, { useMemo, useState, useRef } from "react";

let cacheText: string = "";
const TestUseMemo: React.FC = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("我在缓存中");
  const memoText = useMemo(() => text, [text]);
  if (!cacheText) {
    cacheText = memoText;
  }

  const inputRef: any = useRef(null);

  return (
    <div>
      <p>
        缓存Text: "{memoText}", 是否与上一个相等：{`${cacheText === memoText}`}
      </p>
      <p>
        修改Text:{" "}
        <input
          ref={inputRef}
          type="text"
          onChange={() => {
            const input = inputRef.current;
            const value = input && input.value;
            setText(value);
          }}
        />
      </p>
      <button onClick={() => setShow(!show)}>{show ? "隐藏" : "显示"}</button>
      {show && <p>昨夜星辰昨夜风，画廊西侧桂堂东</p>}
    </div>
  );
};

export default TestUseMemo;
