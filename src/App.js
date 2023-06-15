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
  let LikemeAction = () => {
    //alert();
    console.log("I m button");
  };

  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="Likeme" onClick={LikemeAction} />
    </>
  );
}
