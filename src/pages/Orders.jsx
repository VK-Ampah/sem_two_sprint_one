import React from 'react'

const Orders = () => {
  const dishes = [
    {
      id: 1,
      name: "Pizza",
      price: 10,
      image: process.env.PUBLIC_URL + "/images/img1.jpg"
    },
    {
      id: 2,
      name: "Burger",
      price: 5,
      image: process.env.PUBLIC_URL + "/images/img2.jpg"
    },
    {
      id: 3,
      name: "Hot Dog  ",        
      price: 3,  
      image: process.env.PUBLIC_URL + "/images/img3.jpg"
    },
    {
      id: 1,
      name: "Pizza",
      price: 10,
      image: process.env.PUBLIC_URL + "/images/img4.jpg"
    },
    {
      id: 2,
      name: "Burger",
      price: 5,
      image: process.env.PUBLIC_URL + "/images/img5.jpg"
    },
    {
      id: 3,
      name: "Hot Dog  ",        
      price: 3,  
      image: process.env.PUBLIC_URL + "/images/product5.jpg"
    }]

  return (

    <div className="flex flex-col space-y-4" style={{backgroundColor:"white"}}>
      <div  className='flex space-x-4 w-full m-2'>
      {dishes.map((dish)=>( 
          <div class="m-5">
          <img src={dish.image} width="200px" alt="dish"/>
          <p>{dish.name}</p>
          <p>{dish.price}</p>
          </div>))}
      </div>

        <div className='w-full flex space-x-4flex-row m-2'>
          {dishes.map((dish)=>( 
          <div class="m-5">
          <img src={dish.image} width="200px" alt="dish"/>
          <p>{dish.name}</p>
          <p>{dish.price}</p>
          </div>))}
          </div>

          <div className='w-full flex space-x-4 flex-row m-2'>
          {dishes.map((dish)=>( 
          <div class="m-5">
          <img src={dish.image} width="200px" alt="dish"/>
          <p>{dish.name}</p>
          <p>{dish.price}</p>
          </div>))}
          </div>

          
    </div>
    

  )
}

export default Orders