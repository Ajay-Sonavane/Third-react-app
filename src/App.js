function App() {
  return (
    <>
      <AppHeader />
      <Body />
      <AppFooter />
    </>
  );
}
//user defined tag :
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
      <div className="alert alert-success fs-3">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptatum, enim reiciendis amet ipsam iusto ea neque. Nobis molestiae
        non velit magni debitis, culpa sequi corporis ipsa cupiditate
        perferendis dolorum eius, doloremque, laboriosam labore! Voluptate
        veniam esse earum libero rerum, animi natus illo. Tempore facere beatae,
        saepe repellat molestiae non delectus? Quas autem tempore saepe itaque.
        Repellendus ab illo dolore, sunt amet saepe blanditiis laudantium. Nihil
        soluta nemo nesciunt delectus animi odit in neque officia? Dolor,
        beatae? Esse accusamus dolorem explicabo quae, facere veritatis vel
        doloribus voluptas, amet voluptate officiis nulla dolorum reiciendis ab
        quod ullam sint deserunt consectetur blanditiis!
      </div>{" "}
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
