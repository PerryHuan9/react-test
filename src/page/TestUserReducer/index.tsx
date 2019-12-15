import React, { useReducer } from "react";

interface Action {
  type: string;
  payload?: object;
}

interface State {
  count: number;
}

const reducers = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("ActionTypeError: not this action type");
  }
};

const TestUseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducers, { count: 0 });
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default TestUseReducer;
