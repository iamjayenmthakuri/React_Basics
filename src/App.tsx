import ListGroup from "./components/ListGroup";
const handleSelectedItem = (item: string) => {
  console.log(item);
};

function App() {
  let items = ["New York", "Londan", "Kathmandu", "Pokhera", "Bhaktpur"];
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cites"}
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
