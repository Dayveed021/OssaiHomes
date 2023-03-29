import React from "react";
import "./admin.scss";
import {NavLink } from "react-router-dom";


const AdminLayout = ({content})=>{
    return(
        <div>
        <div className="container">
            <div className="menu">
                <div className="menu-content">
                    <h2>HomeLander</h2>
                    <hr />
                    <ul>
                       <li> <NavLink className={({isActive}) =>(isActive? "active": "menu-list")} to="/admin"><img src='../../flaticons/dashboard2.png' className='menu-icon' alt='icon'/>Dashboard</NavLink></li>
                        <li><NavLink className={({isActive}) =>(isActive? "active": "menu-list")} to="/admin/profile"><img src='../../flaticons/user1.png' className='menu-icon' alt='icon'/>Profile</NavLink></li>
                        <li><NavLink className={({isActive}) =>(isActive? "active": "menu-list")} to="/admin/agents"><img src='../../flaticons/customer1.png' className='menu-icon' alt='icon'/>Agents</NavLink></li>
                        <li><NavLink className={({isActive}) =>(isActive? "active": "menu-list")} to="/admin/properties"><img src='../../flaticons/apartment1.png' className='menu-icon' alt='icon'/>Properties</NavLink></li>
                        <li><NavLink className={({isActive}) =>(isActive? "active": "menu-list")} to="/admin/transactions"><img src='../../flaticons/apartment1.png' className='menu-icon' alt='icon'/>Transactions</NavLink></li>
                    </ul>
                </div>
                
            
            </div>
            <div className="content">
                <header>
                    <nav>
                        <div className='left-side'>
                            <img src="../../flaticons/search1.png" alt="" />
                            <form action="">
                                <input type="text" placeholder='search property, customer name, ref number etc' />
                            </form>
                        </div>
                        <div className='right-side'>
                            <img className='user-img' src="../../flaticons/Ellipse23.png" alt="profile" />
                            <h4>Ossai Jenas</h4>
                            <img className='dropdown' src="../../flaticons/expand-button3.png" alt="" />
                        </div>
                    </nav>
                </header>

                <div className="admin-content">
                    {content}
                </div>

            
            
            </div>

        </div>
    </div>
    )
}

export default AdminLayout;