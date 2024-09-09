import { useEffect, useState } from "react";
import ApiAdapter from "../adapters/apiAdapters";
import DataRepository from "../repositories/dataRepository";
const apiAdapter = ApiAdapter('https://jsonplaceholder.typicode.com');
const dataRepository = DataRepository(apiAdapter);

const ItemComponents = ()=>{
 const [items, setItems] = useState([]) 
  useEffect(()=>{
  const fetchItems= async()=>{
    const data = await dataRepository.getAllItems();
    setItems(data);
  }
  fetchItems();
  },[]);

    return(
        <>
        <div>
         <h1>example Api </h1>
        <ul>
          {items.map(item=>(
            <li key={item.userId}>{item.title}</li>
          ))}
        </ul>
        </div>
        
        
        </>
    )
}



export default ItemComponents;