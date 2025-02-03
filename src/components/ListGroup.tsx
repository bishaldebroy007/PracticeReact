import { MouseEvent } from "react";

function ListGroup() {
  const cityList = ["Dhaka", "Sylhet", "Chittagong", "Rangpur"];
  // cityList = [];

  return (
    <>
      <h1>List</h1>
      {cityList.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/* Dynamic Way: */}
        {cityList.map((names, index) => (
          <li
            className="list-group-item"
            key={names}
            onClick={() => console.log(names, index)}
          >
            {names}
          </li>
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

export default ListGroup;
