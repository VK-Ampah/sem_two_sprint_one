import { Footer } from '../components';
import { foodCategories } from '../data/dummydata';

const Orders = () => {



  return (
    <div className="flex flex-col justify-center text-black bg-red-100 overflow-hidden h-full">
      <div className="flex justify-center">
        <form className='bg-red-100'>
          <h1 className='text-3xl font-semibold justify-center text-center pb-2'>Select your menu items</h1>
          {foodCategories.map((item) => (
            <div key={item.id} className= "flex flex-col border-8 border-slate-700 rounded-md p-2 justify-center">
              <h2 className="p-4 m-4 text-2xl font-semibold">{item.category}</h2>
              <img src={item.image} alt={item.category} className="w-full h-full rounded-full" />
              {item.items.map((item, index) => (
                <div className= "border-8 border-slate-700 rounded-md p-2 justify-center font-bold" key={index}>
                  <input type='checkbox' id={item} name={item} />
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
            </div>
          ))}
        
        </form>
      </div>
      <div className='mt-12 p-4 flex justify-center font-semibold'>
        <form className='border-10 text-bold border-8 p-4'>
          <h1 className="text-3xl font-semibold">Please enter your details to complete your order</h1><br/>
          <label htmlFor="Firstname">First Name</label><br/>
          <input className="w-64 border border-black" type='text' name="Firstname" placeholder='Enter your firstname' /><br/><br/>
          <label htmlFor="Lastname">Last Name</label><br/>
          <input className="w-64 border border-black" type='text' name="Lastname" placeholder='Enter your lastname' />
          
          <p>
            <button 
            className="rounded-md m-2 rounded-md text-white justify-center bg-slate-600"
            onClick={()=>{alert('Thank you for your Order')}}>
              <input type='submit' value='Submit' className="p-2 font-bold" />
            </button>
          </p>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Orders