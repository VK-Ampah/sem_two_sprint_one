import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import { BsChatLeftTextFill,BsChatLeft } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import{RiNotification3Line} from 'react-icons/ri';
// import {TooltipComponent } from '@syncfusion/ej2-react-popups'
import {Tooltip,} from 'react-tippy';

const Navbar = () => {
    const NavButton = (({icon,tooltiptitle,color,customFunc}) => 
        
            <Tooltip html={tooltiptitle} position="TopCenter">
                <div className="navbutton flex items-center gap-2" >
                    <button type="button" onClick={customFunc}
                    className="relative text-xl text-gray-600 p-3" styel={{color}}>
                        <span className="absolute inline-flex rounded-full w-3 right-2 top-2"> {icon} </span> </button>
                </div>
            </Tooltip>)
        
    
  return (
    <>   
    <div className="flex justify-between">
        <div  className="flex items-center">
        {/* <div className="flex items center"> */}
        <NavButton
        icon={<AiOutlineMenu/>}
        tooltiptitle={(<div><strong>Menu</strong></div>)}
        color="gray"
        customFunc={()=>{alert('We are glad you are still here')}}/>
        </div>
        {/* </div> */}
        <div className="flex">
            <NavButton
            icon={<BsChatLeft/>}
            tooltiptitle={(<div><strong>Chat</strong></div>)}
            color="white"
            customFunc={()=>{alert('We are glad you are still here')}}/>&nbsp;&nbsp;
            <NavButton
            icon={<BsChatLeftTextFill/>}
            tooltiptitle={(<div><strong>Chat</strong></div>)}
            color="white"
            customFunc={()=>{alert('We are glad you are still here')}}/>&nbsp;&nbsp;
            <NavButton
            icon={<FaUserAlt/>}
            tooltiptitle={(<div><strong>Alert</strong></div>)}
            color="white"
            customFunc={()=>{alert('We are glad you are still here')}}/>&nbsp;&nbsp;
            <NavButton
            icon={<RiNotification3Line/>}
            tooltiptitle={(<div><strong>Notification</strong></div>)}
            color="white"
            customFunc={()=>{alert('We are glad you are still here')}}/>&nbsp;&nbsp;
            
        </div>
    </div>
    </>

   
  )
}

export default Navbar