import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { Children, useState } from "react";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function App() {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      {alert && <Alert onClose={() => setAlert(false)}>Alert</Alert>}
      <Button color="danger" onClick={() => setAlert(true)}>
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
