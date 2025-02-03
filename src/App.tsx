// import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const cityList = ["Dhaka", "Sylhet", "Chittagong", "Rangpur"];

  const handleSelectionItem = (cityName: string) => {
    console.log(cityName);
  };

  return (
    <>
      <ListGroup
        cityList={cityList}
        heading="Cities"
        onSelectItem={handleSelectionItem}
      />
    </>
  );
}

export default App;
