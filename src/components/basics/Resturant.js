
import React ,{useState} from 'react'
import Menu from './Menuapi';

import Menucard from './Menucard';



const Resturant = () => {
  
  const [menudata, setItems] = useState(Menu);

  const filterItem = (category) => {
    
    if (category === "All") {
      setItems(Menu);
      return;
    }

      const updatedList = Menu.filter((curelem) => 
        {return (curelem.category === category);
        });

      setItems(updatedList);
    
  };

  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
             <button className='btn-item' onClick={() => filterItem("Breakfast")}>Breakfast</button>
          <button className='btn-item' onClick={() => filterItem("Lunch")}>Lunch</button>
          <button className='btn-item' onClick={() => filterItem("Dinner")}>Dinner</button>
          <button className='btn-item' onClick={() => filterItem("Snacks")}>Snacks</button>
          <button className='btn-item' onClick={() => filterItem("All")}>All</button>
        </div>
      </nav>
      <Menucard menudata={menudata}/>
      </>
      
  );
};

export default Resturant;