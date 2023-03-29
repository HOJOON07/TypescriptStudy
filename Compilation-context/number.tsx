import React, { useRef, useState } from "react";

export default function Comparing() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(true);

  const countUpState = () => {
    setCountState((prev) => prev + 1);
    console.log("state:", countState);
  };

  const countUpRef = () => {
    countRef.current += 1;
    console.log("Ref:", countRef.current);
  };

  const countUpVar = () => {
    countVar += 1;
    console.log("variable", countVar);
  };

  const reRender = () => {
    setRender(!render);
    console.log(render);
  };
  return (
    <div>
      <h1>state:{countState}</h1>
      <h1>Ref:{countRef.current}</h1>
      <h1>Variable:{countVar}</h1>
      <button onClick={countUpState}>스테이트 업</button>
      <button onClick={countUpRef}>레프 업</button>
      <button onClick={countUpVar}>변수 업</button>
      <button onClick={reRender}>렌더 업</button>
    </div>
  );
}
