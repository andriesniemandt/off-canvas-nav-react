import React from 'react';
import './Drawer.css'

const Drawer = props => {
    let drawerClasses = "drawer";

    if(props.show) {
        drawerClasses = "drawer open";
    };

    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="#">Products</a></li>
                <li><a href="#">Users</a></li>
            </ul>
        </nav>
    );
};

export default Drawer