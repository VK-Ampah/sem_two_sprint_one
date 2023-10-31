import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { menuLinks } from '../data/dummydata';


const Sidebar = () => {
  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto ml-3">
        {menuLinks.map((item)=>
        (
            <div className="">
            
           <NavLink 
            to={item.path}
            key={item.title} 
            className=" flex items-center gap-5 pl-4 pb-3 text-gray-600 hover:text-gray-800 font-semibold block py-2 px-4">
            {item.icon}
            <span className="capitalize text-white">{item.title}</span>
            </NavLink>
            {item.locations && item.locations.map((item)=>
           
            <p className="capitalize">&nbsp;&nbsp;&nbsp;&nbsp;{item.name}: {item.address}</p>
          
            
                
           )}
            </div>
        ))}

    </div>
  )
}

export default Sidebar