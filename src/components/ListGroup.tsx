//import { MouseEvent, useState } from "react";

import { useState } from "react";

interface Props {
  cityList: string[];
  heading: string;

  onSelectItem: (cityLight: string) => void;
}

function ListGroup({ cityList, heading, onSelectItem }: Props) {
  // Use the heading prop
  // cityList = [];
  // let selectedIndex = 0; //It means no item is selected.
  // 0 means first item is selected.

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // array[0]; //It will give the value of the state.
  // array[1]; //It will give the function to update the state.

  // Event Handler:
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h2>{heading}</h2>
      {cityList.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {cityList.map((names, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={names}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(names);
            }}
          >
            {names}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
