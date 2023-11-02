// import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Menu, Orders } from './pages';
import { Sidebar,Navbar } from './components';




const App = () => {

    return (
    <div>
        
        <BrowserRouter>
        <div className="sidebar flex flex-relative bg-white">
            <div className = "w-72 fixed bg-black sidebar text-white mt-4 h-screen ml-3">
                <Sidebar/>
            </div>
            <div className="min-h-screen w-full md:ml-72 text-white flex-2">
                <div className= "navbar h-1/6 bg-black fixed md:static w-full justify-between mt-4 ml-3">
                        <Navbar/>             
                </div>
                
                <div>
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