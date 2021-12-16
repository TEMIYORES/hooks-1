import React from 'react'
import './App.css'
import Form from './hooksForm/Form';
// import ParentComponent from './CallBackHooks/ParentComponent';
// import ParentCount from './MemoAndRef/ParentCount';
// import DataFetching from './useReducer/DataFetching';
// import DataFetchingUseReducer from './useReducer/DataFetchingUseReducer';
// import ComponentA from './useReducerandContext/CounterA'
// import ComponentB from './useReducerandContext/CounterB'
// import ComponentC from "./useReducerandContext/CounterC";


// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// }
export const countContext = React.createContext()
function AppTwo() {
//    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div className='App'>
        {/* <div>Count -- {count}</div>
        <countContext.Provider value = {{Contextcount : count, Contextdispatch: dispatch}}>
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>
            </countContext.Provider> */}

            {/* <DataFetching/> */}

            {/* <DataFetchingUseReducer/> */}
            {/* <ParentComponent/> */}
            {/* <ParentCount/> */}
            <Form/>
        </div>
    )
}

export default AppTwo
