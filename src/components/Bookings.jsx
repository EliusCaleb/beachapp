import React from "react";

const Bookings = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full p-4">
      <form className='lg:flex lg:justify-between w-full items-center'>
          <div  className="flex flex-col my-2 py-2 " >
            <h1>Destination </h1>
            <select className="lg: w-[300px] md:w-full  p-3 rounded-md">
              <option>Maldives</option>
              <option>Seychelles</option>
              <option>Morocco</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-full lg:max-w-[250px] my-2 py-2">
              <h1>Check-in</h1>
              <input type="date" className="border  rounded-md p-2" />
            </div>
            <div className="flex flex-col w-full lg:max-w-[250px] my-2 py-2 mx-2">
              <h1>Check-Out</h1>
              <input type="date" className="border  rounded-md p-2" />
            </div>
          
          </div>

          <div className="flex flex-col md:w-full my-2 p-2 ">
            <h1>Search</h1>
            <button className="text-white w-full">Rates & Availability</button>
          </div>
      </form>
    </div>
  );
};

export default Bookings;
