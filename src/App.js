import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter Application</h1>
      <CounterApp />
    </>
  );
}

function CounterApp() {
  //let counter = 1 ;stateless memeber
  // let list = useState(1);
  // let[counter,setCounter]= list       // first is variable and second is method
  //let [counter, setCounter] = useState(1);

  //let counter = 1; stateless
  let [counter, setCounter] = useState(100); //if you want to perform dom operation then use of function is mandatory

  let likemAction = () => {
    counter = counter + 1;
    console.log(counter);
    setCounter(counter);
  };
  return (
    <>
      <h1>{counter}</h1>
      <h1>{counter}</h1>
      <h1>{counter}</h1>
      <input type="button" value="Like Me" onClick={likemAction} />
    </>
  );
}
export default App;
