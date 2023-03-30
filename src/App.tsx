import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { Children, useState } from "react";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function App() {
  let items = ["New York", "Londan", "Kathmandu", "Pokhera", "Bhaktpur"];
  const [alert, setAlert] = useState(false);
  return (
    <>
      {alert && <Alert onClose={() => setAlert(false)}>Alert</Alert>}
      <Button color="danger" onClick={() => setAlert(true)}>
        My Button
      </Button>
      <ListGroup
        items={items}
        heading={"Cites"}
        onSelectItem={handleSelectedItem}
      />
    </>
  );
}

export default App;
