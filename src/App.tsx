import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
const handleSelectedItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>

    // let items = ["New York", "Londan", "Kathmandu", "Pokhera", "Bhaktpur"];
    // return (
    //   <div>
    //     <ListGroup
    //       items={items}
    //       heading={"Cites"}
    //       onSelectItem={handleSelectedItem}
    //     />
    //   </div>
    // );
  );
}

export default App;
