import {useState} from "react";
import { inventoryData } from "../../data/data";
import InventoryList from "../InventoryList/InventoryList";


//Child Component
const Shop = () => {

    //State
    const [inventory, setInventory] = useState(inventoryData);

    return (

      <main>
        <h1>Shop</h1>
        <InventoryList inventory={inventory}/>
      </main>

    );
  };
  
  export default Shop;
  