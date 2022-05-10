import React from "react";

function MenuList ({ title, setCurrentCategory, id, active }) {
    return (
        <li className={active ? "menuList active" : "menuList"}
   onClick={() => setCurrentCategory(id)}
    >
     {title}
    </li>
        

    );
}

export default MenuList;