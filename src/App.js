// import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Menu, Orders } from './pages';
import { Sidebar,Navbar } from './components';




const App = () => {

    return (
    <div>
        
        <BrowserRouter>
        <div class="flex flex-row justify-between bg-slate-950">
            <div className = "w-72 fixed bg-black sidebar text-white">
                <Sidebar/>
            </div>
            <div className="min-h-screen w-full ml-72 text-white">
                <div className= "fixed md:static navbar w-full">
                        <Navbar/>             
                </div>
                
                <div claname="flex flex-col" >
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