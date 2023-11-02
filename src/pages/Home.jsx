import React from 'react';
import { menus } from '../data/dummydata';

const Home = () => {

    const imageUrl=process.env.PUBLIC_URL + "/images/img1.jpg"

   
  return (
    <div className="ml-3 mt-12 color-black w-full md:overflow-hidden overflow-auto" style={{backgroundColor:"blue"}}>
        <div className='mt-12 w-full'>
            <img src = {imageUrl} width="100%" height="50px"/>
        </div>
        <div>
            <h1>Indulge Your Senses at SPRINT 1</h1>
            <p>Embark on a culinary adventure where flavors dance and aromas enchant. At <span class="restaurant-name">[Your Restaurant Name]</span>, we take pride in crafting unforgettable culinary experiences.</p>
            <p>From the sizzle of our grill to the delicate artistry of our desserts, every dish is a celebration of taste and creativity.</p>
            <p>Our passionate chefs source the finest ingredients to weave together a menu that caters to diverse palates. Whether you crave the comforting warmth of a home-cooked meal or the excitement of bold, innovative flavors, our restaurant is the place where your gastronomic dreams come true.</p>
            <p>Join us on a culinary journey where each bite tells a story, and every meal is a masterpiece. Discover the joy of dining anew; your adventure begins here.</p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center bg-black text-white mb-12">
            {/* <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati placeat libero accusamus dolor, corrupti cupiditate repellendus ex commodi laborum enim voluptatem eos? Harum magni, labore soluta modi est eius.</p>


            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati placeat libero accusamus dolor, corrupti cupiditate repellendus ex commodi laborum enim voluptatem eos? Harum magni, labore soluta modi est eius.</p>

            </div> */}
            {menus.map((item) => 
            <div className="flex flex-wrap flex-end justify-center  items-center p-2 mt-12">
                <div key = {item.items[0]} className="flex m-3 ml-3 mt-3 pt-3 p-2"  style={{marginTop:"10px", backgroundColor: "white"}}>
                    <img src={item.items[0].image} width="200px" height="100px" alt="dish"/>
                    <p>{item.category}</p>
                    <p>{item.items[0].name}</p>
                </div>
                <div key = {item.items[1]} className="m-3 ml-3 mt-3 pt-3 p-2"  style={{marginTop:"10px"}}>
                    <img src={item.items[1].image} width="200px" height="100px" alt="dish"/>
                    <p>{item.category}</p>
                    <p>{item.items[1].name}</p>
                </div>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquam praesentium dicta accusamus culpa veniam harum incidunt ut! Iusto accusantium vitae porro in voluptatum odit rerum excepturi ipsam officia velit!</p> */}
            </div>)}


        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 justify-center mt-12 ml-3">
            <div className="mt-12 p-2">
                <p> I AM SPARTACUS </p>
                <p> HELLO </p>
                <p> I AM </p>

            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, provident aut nulla dignissimos rerum facilis necessitatibus nobis tenetur rem tempora voluptatum error ipsum doloremque at perspiciatis voluptas dolorum expedita exercitationem!</p>

            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, provident aut nulla dignissimos rerum facilis necessitatibus nobis tenetur rem tempora voluptatum error ipsum doloremque at perspiciatis voluptas dolorum expedita exercitationem!</p>

            </div>

        </div>
    </div>
  )
}

export default Home