import React from "react";

function MenuList ({ title, setCurrentCategory, id, active }) {
    return (
        <h2 className={active ? "menuList active" : "menuList"}
   onClick={() => setCurrentCategory(id)}
    >
     {title}
    </h2>
        

    );
}

export default MenuList;