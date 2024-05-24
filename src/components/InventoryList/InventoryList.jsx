

const InventoryList = ({inventory}) => {
    return (
      <div>
        <h2>Inventory List</h2>
        <ul>
            {inventory.map((item)=>{
                return (
                    <li key={item._id}>
                        <p>{item.name}</p>
                        <p>Price: ${item.price}</p>
                    </li>
                )
            })}
        </ul>
      </div>
    );
  };
  
  export default InventoryList;
  