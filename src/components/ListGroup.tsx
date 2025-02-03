import { MouseEvent } from "react";

function ListGroup() {
  const cityList = ["Dhaka", "Sylhet", "Chittagong", "Rangpur"];
  // cityList = [];
  let selectedIndex = -1; //It means no item is selected. 0 means first item is selected.

  // Event Handler:
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {cityList.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/* Dynamic Way: */}
        {cityList.map((names, index) => (
          <li
            className="list-group-item active"
            key={names}
            onClick={handleClick}
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
