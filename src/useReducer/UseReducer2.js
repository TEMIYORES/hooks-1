import React, { useReducer } from "react";

const state = {
    firstCounter : 0,
    secondCounter : 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return ({...state, firstCounter : state.firstCounter + action.value});
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return ({...state, secondCounter : state.secondCounter + action.value});
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return { ...state, firstCounter: 0 };
    case "reset2":
      return { ...state, secondCounter: 0 };
    default:
      return state;
  }
};
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, state);
  return (
    <div>
      <div>Count -- {count.firstCounter}</div>
      <div>Count -- {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increase Count
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrease Count
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increase Count by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrease Count by 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset Count</button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
          Increase Count by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
          decrease Count by 5
        </button>
        <button onClick={() => dispatch({ type: "reset2" })}>
          Reset Count
        </button>
      </div>
    </div>
  );
}

export default UseReducer;
