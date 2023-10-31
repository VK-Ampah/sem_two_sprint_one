import { FaHome, FaBars, FaClipboardList,FaLocationArrow } from 'react-icons/fa';
export const menuLinks = [
    { title:'Home',icon: <FaHome/>,path:'/'},
    { title:'Menu',icon: <FaBars/>,path:'/menu'},
    { title:'Orders',icon: <FaClipboardList/>,path:'/orders',locations:[{name:"St.Johns",address:"14a Arrowrd"},{name:"Mt Pearl",address:"34a CtRoad"}]},
{title:"location",icon:<FaLocationArrow/>,path:"/location",locations:[{name:"St.Johns",address:"14a Arrowrd"},{name:"Mt Pearl",address:"34a CtRoad"}]
}]