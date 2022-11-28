/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [jyotai, setJotai] = useState(true);
  const buttonClick = () => {
    // alert("ok");
    setNum(num + 1);
    // if ((num + 1) % 3 === 0) {
    //   setJotai(true);
    // } else {
    //   setJotai(false);
    // }
  };
  const changeButton = () => {
    setJotai(!jyotai);
  };

  useEffect(() => {
    console.log("ok6");
    if (num > 0) {
      if (num % 3 === 0) {
        jyotai || setJotai(true);
      } else {
        jyotai && setJotai(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="red">元気ですか</ColorfulMessage>
      <ColorfulMessage color="blue">元気ですよ</ColorfulMessage>
      <button onClick={buttonClick}>countボタン</button>
      <br />
      <button onClick={changeButton}>changeボタン</button>
      <p>{num}</p>
      {jyotai ? <p>(*´ω｀)</p> : <></>}
      {jyotai && <p>( *´艸｀)( *´艸｀)</p>}
    </>
  );
};

export default App;
