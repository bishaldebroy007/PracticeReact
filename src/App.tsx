// import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const cityList = ["Dhaka", "Sylhet", "Chittagong", "Rangpur"];

  return (
    <>
      <ListGroup cityList={cityList} heading="Cities" />
    </>
  );
}

export default App;
