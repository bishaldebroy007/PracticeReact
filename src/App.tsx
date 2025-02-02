// import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const cityList = ["Dhaka", "Sylhet", "CTG"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* Dynamic Way: */}
        {cityList.map((cityList) => (
          <li>{cityList}</li>
        ))}
        {/* Old Ways: */}
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default App;
