import './App.css';
import React from 'react'
// import AutoCounter from './components/AutoCounter';
// import DataFetching from './components/DataFetching';
// import FetchingSingleData from './components/FetchingSingleData';
// import ComponentC from './components/ComponentC';
// import CounterOne from './useReducer/CounterOne';
// import UseReducer from './useReducer/UseReducer';
// import UseReducer2 from './useReducer/UseReducer2';
import MultipleUseReducers from './useReducer/MultipleUseReducers';
// import HooksMouse from './components/HooksMouse';
// import ClassMouse from './components/ClassMouse';
// import MouseContainer from './components/MouseContainer';
// import UseEffect from './components/UseEffect';
// import HooksArray from './components/HooksArray';
// import UseEffectClass from './components/UseEffectClass';
// import HooksForm from './components/HooksForm';
// import ClassCounter from './components/ClassCounter';
// import HooksCounter from './components/HooksCounter';
// import HooksCounterTwo from './components/HooksCounterTwo';

export const UserContext = React.createContext()
export const UserChannel = React.createContext()
function App() {
  return (
    <div className="App">
     {/* <ClassCounter/> */}
     {/* <HooksCounter/> */}
     {/* <HooksCounterTwo/> */}
     {/* <HooksForm/> */}
     {/* <HooksArray/> */}
     {/* <UseEffectClass/> */}
     {/* <UseEffect/> */}
     {/* <ClassMouse/> */}
     {/* <HooksMouse/> */}
     {/* <MouseContainer/> */}
     {/* <AutoCounter/> */}
     {/* <DataFetching/> */}
     {/* <FetchingSingleData/> */}


     {/* <UserContext.Provider value={'Temiyores'}>
       <UserChannel.Provider value={'Codevolution'}>
       <ComponentC/>
       </UserChannel.Provider>
     </UserContext.Provider> */}


{/* <CounterOne/> */}
{/* <UseReducer/> */}

{/* <UseReducer2/> */}
<MultipleUseReducers/>
    </div>
  );
}

export default App;
