import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { Children } from "react";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="danger" onClick={() => console.log("clicked")}>
        My Button
      </Button>
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
