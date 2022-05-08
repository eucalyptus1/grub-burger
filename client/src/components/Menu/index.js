import React from "react";

import { Link } from 'react-router-dom';

// import Entrees from './Entrees';
// import Appetizers from './Appetizers';
// import Desserts from './Desserts';
// import Drinks from './Drinks';

function Menu() {
    return (
        <div>
            <ul className="flex-row">
            <li><Link to="/appetizers">Appetizers</Link></li>
            <li><Link to="/entrees">Entrees</Link></li>
            <li><Link to="/desserts">Desserts</Link></li>
            <li><Link to="/drinks">Drinks</Link></li>
            </ul>
        </div>
    )
}

export default Menu;