import React from 'react';
import { menus } from '../data/dummydata';

const Home = () => {

    const imageUrl=process.env.PUBLIC_URL + "/images/img1.jpg"

   
  return (
    <div className="ml-3 mt-12 color-black w-full" style={{backgroundColor:"blue"}}>
        <div className='mt-12'>
            <img src = {imageUrl} height="15px"/>
        </div>
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptas repellendus repellat quasi est ipsa ut iusto! Excepturi vitae, ratione omnis, odio, itaque ipsa obcaecati pariatur facilis ut quisquam esse.</p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center bg-black text-white mb-12">
            {/* <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati placeat libero accusamus dolor, corrupti cupiditate repellendus ex commodi laborum enim voluptatem eos? Harum magni, labore soluta modi est eius.</p>


            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate obcaecati placeat libero accusamus dolor, corrupti cupiditate repellendus ex commodi laborum enim voluptatem eos? Harum magni, labore soluta modi est eius.</p>

            </div> */}
            {menus.map((item) => 
            <div className="flex flex-wrap justify-center  items-center p-2 mt-12">
                <div key = {item.items[0]} className="m-3 ml-3 mt-3 pt-3 p-2"  style={{marginTop:"10px", backgroundColor: "white"}}>
                    <img src={item.items[0].image} width="100%" height="100%" alt="dish"/>
                    <p>{item.category}</p>
                    <p>{item.items[0].name}</p>
                </div>
                <div key = {item.items[1]} className="m-3 ml-3 mt-3 pt-3 p-2"  style={{marginTop:"10px"}}>
                    <img src={item.items[1].image} width="100%" height="100%" alt="dish"/>
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