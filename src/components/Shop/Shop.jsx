import {useState} from "react";
import { inventoryData } from "../../data/data";
import InventoryList from "../InventoryList/InventoryList";
import "./Shop.css";


//Child Component
const Shop = () => {

    //State
    const [shopInventory, setShopInventory] = useState(inventoryData);
    const [userInventory, setUserInventory] = useState([]);

    //Functions
    const handleAddItem = (item) => {
 
      //When click event happens, this event handler function has the state setter function - which it updates the state variable to an empty array
      setUserInventory([...userInventory, item]);
      setShopInventory(shopInventory.filter((element)=>{return element._id !== item._id}))
    };

    const handleRemoveItem = (item) => {
      setShopInventory([...shopInventory, item]);
      setUserInventory(userInventory.filter((element)=>{return element._id !== item._id}));
    }

    return (

      <main>
        <h1>Shop</h1>
        {/* <button onClick={handleAddItem}>Click Here</button> */}
        {/* We can create multiple instances of the same component, but pass DIFFERENT data to them to handle different features - We MUST give a title prop and then pass the unique state data to each instance of the component */}
        <section className="shop-section">
          <InventoryList title="Shop Inventory" inventory={shopInventory} handleAddItem={handleAddItem}/>
          <InventoryList title="User Inventory" inventory={userInventory} handleRemoveItem={handleRemoveItem}/>
        </section>
      </main>

    );
  };
  
  export default Shop;
  