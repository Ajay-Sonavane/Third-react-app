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
  // Data members
  let id = 1;
  let str = "Hello world";
  let pi = 3.14;
  let active = true;

  //member function
  let likeMe = () => {};
  let dislikeMe = () => {};

  //jsx:: view::user-interface::Required;
  return (
    <>
      <h1>1</h1>
      <input type="button" value="Likeme" />
    </>
  );
}
