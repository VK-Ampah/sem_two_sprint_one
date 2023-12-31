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
    <div className="flex justify-between text-black">
        <div  className="flex items-center text-2xl font-semi-bold">
        {/* <div className="flex items center"> */}
        <button type="button" ClassName="text-4xl font-semibold rounded-full fill-slate-900">
            <NavButton
            icon={<AiOutlineMenu/>}
            tooltiptitle={(<div><strong>Menu</strong></div>)}
            color="black"
            customFunc={()=>{alert('We are glad you are still here')}}
            className="text-4xl font-semibold fill-slate-900"/>
        </button>
        </div>
        <div>
            <h1 className=" italic h-full text-3xl font-semi-bold">WELCOME  TO  SPRINT-TEAM  RESTAURANT</h1>
        </div>
        {/* </div> */}
        <div className="flex text-2xl font-semibold">
            <NavButton
            className="font-bold text-4xl text-blue-500"
            icon={<BsChatLeft/>}
            tooltiptitle={(<div><strong>Chat</strong></div>)}
            color="black"
            customFunc={()=>{alert('We are glad you are still here')}}/>&nbsp;&nbsp;
            <NavButton
            icon={<BsChatLeftTextFill/>}
            tooltiptitle={(<div><strong>Chat</strong></div>)}
            color="black"
            customFunc={()=>{alert('We are glad you are still here')}}/>&nbsp;&nbsp;
            <NavButton
            icon={<FaUserAlt/>}
            tooltiptitle={(<div><strong>Alert</strong></div>)}
            color="black"
            customFunc={()=>{alert('We are glad you are still here')}}/>&nbsp;&nbsp;
            <NavButton
            icon={<RiNotification3Line/>}
            tooltiptitle={(<div><strong>Notification</strong></div>)}
            color="black"
            customFunc={()=>{alert('We are glad you are still here')}}/>&nbsp;&nbsp;
            
        </div>
    </div>
    </>

   
  )
}

export default Navbar