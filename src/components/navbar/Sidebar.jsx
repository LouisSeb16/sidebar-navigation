import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsJustifyLeft} from 'react-icons/bs';
import { BsX } from 'react-icons/bs';
import { SidebarData } from './SidebarData';
import "./../styles/index.scss";



const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className="navbar">
                <Link to='#' className="menu-bars">
                    <BsJustifyLeft onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-item-menu" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='/' className='menu-bars'>
                            <BsX/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Sidebar
