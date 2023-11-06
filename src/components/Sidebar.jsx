import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { menuLinks } from '../data/dummydata';


const Sidebar = () => {
  return (
    <div className="text-black h-screen ml-3 md:overflow-hidden overflow-auto md:hover:overflow-auto"
    style={{display: "flex",flexDirection:"column",justifyContent:"space-between"}}>
        {menuLinks.map((item)=>
        (
        <div className="text-black flex justify-between items-center m-10 p-4 place-content-evenly" 
        style={{marginTop:"10px", fontWeight:"bold", color:"black", textAlign:"center",flexDirection:"column",justifyContent:"space-between"}}>
            
           <NavLink 
            to={item.path}
            key={item.title} 
            className=" flex items-center gap-5 pl-4 pb-3 text-gray-600 hover:text-gray-800 font-semibold py-2 px-4">
            {item.icon}
            &nbsp;&nbsp;<span className="capitalize text-black text-xl">{item.title}</span>
            </NavLink>
            {/* {item.locations && item.locations.map((item)=>           
            <p className="capitalize">&nbsp;&nbsp;&nbsp;&nbsp;{item.name}: {item.address}</p>                          
           )} */}
          </div>
        ))}
        <div>
          <div>
            <p className="text-center font-semibold text-3xl italic"> We Serve You better </p>
          </div>
        </div>

    </div>
  )
}

export default Sidebar