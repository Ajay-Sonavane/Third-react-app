import { useState } from "react";

function App() {
  return (
    <>
      <h1>Counter Application</h1>
      <CounterApp />
      <CounterApp />
      <CounterApp />
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
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facilis
        deleniti enim nobis maiores, et minima assumenda at nemo, nulla error
        nisi quia ipsa reiciendis modi adipisci eligendi distinctio iusto. Quia
        enim adipisci iusto incidunt accusantium autem, voluptates perspiciatis
        deserunt quisquam modi? Repellendus ab fuga ipsam aliquid ex!
        Voluptatem, quibusdam!
      </h4>
      <h1>{counter}</h1>

      <input type="button" value="&#128077;" onClick={likemAction} />
    </>
  );
}
export default App;
