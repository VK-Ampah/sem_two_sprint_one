import React from 'react';
import { menus } from '../data/dummydata';
import Footer from '../components/Footer.jsx'

const Home = () => {

    const imageUrl=process.env.PUBLIC_URL + "/images/img1.jpg";
    const image2Url = process.env.PUBLIC_URL + "/images/f1.jpg";

    const hoursOfOperation = [
        { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
        { day: 'Sunday', hours: 'Closed' }
    ];


   
  return (
    <div className="ml-3 mt-12 color-black w-full md:overflow-hidden overflow-auto bg-red-300">
        <div className='mt-12 w-full'>
            <img src = {imageUrl} width="100%" height="50px" style={{marginTop:"10px", color:"black", borderRadius:"20%"}}/>
        </div>
        <div  style={{marginTop:"10px", color:"black", textAlign:"center"}}>
            <h1 style={{marginTop:"10px", color:"black", borderRadius:"10%", fontSize:"30px", fontWeight:"bold"}}>Indulge Your Senses at SPRINT 1</h1>
            <p>Embark on a culinary adventure where flavors dance and aromas enchant. At <span class="restaurant-name">[Your Restaurant Name]</span>, we take pride in crafting unforgettable culinary experiences.</p>
            <p>From the sizzle of our grill to the delicate artistry of our desserts, every dish is a celebration of taste and creativity.</p>
           
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center text-white mb-12">
            {/* <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati placeat libero accusamus dolor, corrupti cupiditate repellendus ex commodi laborum enim voluptatem eos? Harum magni, labore soluta modi est eius.</p>


            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati placeat libero accusamus dolor, corrupti cupiditate repellendus ex commodi laborum enim voluptatem eos? Harum magni, labore soluta modi est eius.</p>

            </div> */}
            {menus.map((item) => 
            <div className="flex flex-nowrap flex-end justify-center  items-center p-2 mt-12">
                <div key = {item.items[0]} className="rounded-full items-center m-3 ml-3 mt-3 pt-3 p-2 text-black"  style={{marginTop:"10px", color:"black",textAlign:"center"}}>
                    <img src={item.items[0].image} width="300px" height="100px" alt="dish" style={{marginTop:"10px", color:"black", borderRadius:"50%"}}/><br/>
                    <span className="m-3 ml-3 mt-3 pt-3 p-2 text-black items-center"><p>{item.category}</p></span>
                    <span><p>{item.items[0].name}</p></span><br/>
                </div>
                {/* <div key = {item.items[1]} className="m-3 ml-3 mt-3 pt-3 p-2"  style={{marginTop:"10px"}}>
                    <img src={item.items[1].image} width="200px" height="100px" alt="dish"/>
                    <p>{item.category}</p>
                    <p>{item.items[1].name}</p>
                </div> */}
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquam praesentium dicta accusamus culpa veniam harum incidunt ut! Iusto accusantium vitae porro in voluptatum odit rerum excepturi ipsam officia velit!</p> */}
            </div>)}
        </div>
        <div className="mt-12 flex lg:flex-nowrap justify-center gap-10 ml-3" style={{marginTop:"10px", color:"black", justifyContent:"center"}}>
            <div className="mt-12 p-2" style={{marginTop:"10px", color:"black", borderRadius:"50%",justifyContent:"center"}}>
                <h1 style={{marginTop:"10px", color:"black", borderRadius:"10%", fontSize:"30px", fontWeight:"bold"}}> HOURS OF OPERATION </h1>
                { hoursOfOperation.map((item)=>(
                    <div  style={{marginTop:"10px", fontWeight:"bold", color:"black", textAlign:"center"}}>
                    
                        <p>{item.day}: {item.hours} </p>
                    
                    </div>))}
            </div>
            {/* <div className="rounded-full">
                <img src={image2Url}  width="100%" height="50px"/>
            </div>
            <div className="">
                 <p>Join us on a culinary journey where each bite tells a story, and every meal is a masterpiece. 
                    Discover the joy of dining anew; your adventure begins here.</p>
            </div> */}
        </div>
        <div>

            <Footer/>    


        </div>
    </div>
  )
}

export default Home