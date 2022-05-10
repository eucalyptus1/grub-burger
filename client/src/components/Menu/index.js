import React, { useState, useEffect } from "react";

import MenuList from './MenuList';

import { appetizers, entrees, desserts, drinks } from './MenuData';



function Menu() {


  const [currentCategory, setCurrentCategory] = useState(0)
  const [currentMenu, setCurrentMenu] = useState([]);


  const list = [
    {
      id: "app",
      title: "Appetizers"
    },
    {
      id: "ent",
      title: "Entrees"
    },
    {
      id: "des",
      title: "Desserts"
    },
    {
      id: "drink",
      title: "Drinks"
    }
  ];

  useEffect(() => {

    switch (currentCategory) {
      case "app":
        setCurrentMenu(appetizers);
        break;
      case "ent":
        setCurrentMenu(entrees);
        break;
      case "des":
        setCurrentMenu(desserts);
        break;
      case "drink":
        setCurrentMenu(drinks);
        break;
      default:
        setCurrentMenu(appetizers);
    }

  }, [currentCategory])


  return (
    <section className="menu-section">
      <h2>Menu</h2>
      <ul>
      {list.map((item) => (
          <MenuList
            title={item.title}
            active={currentCategory === item.id}
            setCurrentCategory={setCurrentCategory}
            id={item.id}
          />
        ))}
        </ul>

         <div className="current-menu">
        {currentMenu.map((data) => (
          
        
        <div className="item-card">
        {/* <img src={data.img}/> */}
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>{data.price}</p>
        </div>
        ))}
        )
      </div>
    </section>
  );
}

export default Menu;
