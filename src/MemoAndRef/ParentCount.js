// import React, { useState, useMemo } from "react";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
// import CountOne from "./CountOne";
// import CountTwo from "./CountTwo";
// import FocusInput from "./FocusInput";
// import HooksTimer from "./HooksTimer";

function ParentCount() {
  // const [countOne, setCountOne] = useState(0);
  // const [countTwo, setCountTwo] = useState(0);

  // const increaseCountOne =  () => {
  //   setCountOne((prevCountOne) => prevCountOne + 1);
  // }
  // const increaseCountTwo = () => {
  //   setCountTwo((prevCountTwo) => prevCountTwo + 1);
  // };
  // const isEven = useMemo(() => {
  //   let i = 0;
  //   while( i < 200000) i++
  //   return countOne % 2 === 0
  // },[countOne])
  return (
    <div>
      {/* <button onClick={increaseCountOne}>CountOne -- {countOne}</button><span>{isEven ? 'Even' : "Odd"}</span><br/>
      <button onClick={increaseCountTwo}>CountTwo -- {countTwo}</button>
      <FocusInput/>
      <HooksTimer/> */}

      {/* <CountOne/>
      <CountTwo/> */}

      <CounterOne/>
      <CounterTwo/>
    </div>
  );
}

export default ParentCount;
