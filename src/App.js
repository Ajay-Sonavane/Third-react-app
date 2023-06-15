function App() {
  return (
    <>
      <AppHeader />
      <Body />
      <AppFooter />
    </>
  );
}
//user defined tag :-
function AppHeader() {
  return (
    <>
      <div className="row d-flex bg-success text-light p-3 justify-content-center ">
        <div className="col">Home</div>
        <div className="col"> Project</div>
        <div className="col">AboutUs</div>
      </div>
    </>
  );
}

function Body() {
  return (
    <>
      <h1>Body</h1>
    </>
  );
}
function AppFooter() {
  return (
    <>
      <h1>AppFooter</h1>
    </>
  );
}
export default App;
