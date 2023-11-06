// import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Menu, Orders } from './pages';
import { Sidebar,Navbar } from './components';




const App = () => {

    return (
    <div>
        
        <BrowserRouter>
        <div className="lg:flex lg:flex-relative  md:flex md:flex-relative bg-red-100">
            <div className = "w-72 md:w-50 sm:w-30 fixed bg-red-300 sidebar text-black h-screen ml-3 h-screen lg:block md:block hidden">
                <Sidebar/>
            </div>
            <div className="min-h-screen w-full md:ml-72 text-black flex-2 pl-4">
                <div className= "h-32 text-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 fixed bg-red-300 navbar md:static w-full justify-between">
                        <Navbar/>             
                </div>
                
                <div classname="md:overflow-hidden overflow-auto bg-red-100">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/menu" element={<Menu/>}/>
                        <Route path="/orders" element={<Orders/>}/>
                        <Route path="/location" element={<Orders/>}/>
                    </Routes>

                </div>
            </div>


            </div>
        </BrowserRouter>
    
 
    </div>)

}

export default App;