import React from 'react';
import './Toolbar.css';
import DrawerToggle from '../Drawer/DrawerToggle';

const Toolbar = props => (
    <header className={"toolbar"}>
        <nav className={"toolbar__navigation"}>
            <div>
                <DrawerToggle click={props.drawerClickHandler} />
            </div>
            <div className={"toolbar__logo"}>
                <a href="#">The Logo</a>
            </div>
            <div className={"flex__spacer"}></div>
            <div className={"toolbar__navigation-items"}>
                <ul>
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                    <li><a href="#">Page 3</a></li>
                    <li><a href="#">Page 4</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar