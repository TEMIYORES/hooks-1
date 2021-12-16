import React from "react";

function Button({ text, click, children }) {
 console.log(`Rendering ${children}`);
  return (
    <>
      {
          text === "age" ? <button onClick={click}> {children} </button> : null}
      {text === "salary" ? <button onClick={click}> {children} </button> : null}
    </>
  );
}

export default React.memo(Button)
