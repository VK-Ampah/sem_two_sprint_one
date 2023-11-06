// import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Menu, Orders } from './pages';
import { Sidebar,Navbar } from './components';




const App = () => {

    return (
    <div>
        
        <BrowserRouter>
        <div className="flex flex-relative bg-slate-300">
            <div className = "w-72 fixed bg-red-300 sidebar text-black mt-4 h-screen ml-3">
                <Sidebar/>
            </div>
            <div className="min-h-screen w-full md:ml-72 text-white flex-2">
                <div className= "h-32  mr-6 p-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 fixed bg-red-300 navbar md:static w-full justify-between mt-4 ml-3">
                        <Navbar/>             
                </div>
                
                <div classname="md:overflow-hidden overflow-auto bg-red-100 mr-4">
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