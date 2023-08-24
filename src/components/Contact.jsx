import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1140px] w-full m-auto ">
      <h2 className="text-lg text-center m-2">Send us a message</h2>
      <h3 className=" text-center m-2">We're standing by! </h3>
        <div className="grid md:grid-cols-2">
          <img
            className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]  rounded-md"
            src="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            alt="/"
          />
          <form>
          <div className="grid grid-cols-2">
            <input  className='border m-2 p-2' placeholder="First" type="text" />
            <input className='border m-2 p-2'  placeholder="Last" type="text" />
            <input className='border m-2 p-2' placeholder="Email" type="email" />
            <input className='border m-2 p-2' placeholder="Phone" type="number" />
          <input  className='border col-span-2 m-2 p-2' placeholder="Address" type="address" />
          <textarea  className='border col-span-2 m-2 p-2' cols='30'rows='10'></textarea>
          <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
        </div>

        
      </div>
    
  );
};

export default Contact;
