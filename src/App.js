import { useState } from "react";

function App() {
  return (
    <>
      <h1>String example</h1>
      <String />
    </>
  );
}

function String() {
  let [title, setTitle] = useState("Hello World");
  let lowercase = () => {
    title = title.toLowerCase();
    setTitle(title);
  };

  let uppercase = () => {
    title = title.toUpperCase();
    setTitle(title);
  };
  return (
    <>
      <h1>{title} </h1>
      <input type="button" value="lowercase" onClick={lowercase} />
      <input type="button" value="uppercase" onClick={uppercase} />
    </>
  );
}
export default App;
