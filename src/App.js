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
  let counter = 1;

  let LikemeAction = () => {
    counter = counter + 1;
    console.log("i m button ", counter);
  };

  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="Likeme" onClick={LikemeAction} />
    </>
  );
}
