import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter Application</h1>
      <CounterApp />
    </>
  );
}
export default App;

function CounterApp() {
  //let counter = 1; stateless data member == means if we change the numer it will not afffecd in Gui
  let [counter, setCounter] = useState(1); //stateful// this will help to perform dom operations.
  let LikemeAction = () => {
    counter = counter + 1;
    console.log("i m button ", counter);
    setCounter(counter); //calling setcounter is to perform Dom operation
  };

  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="Likeme" onClick={LikemeAction} />
    </>
  );
}
