import React from "react";

const Hero = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80";
  return (
    <div className="w-full h-[90vh]">
      <div
        className="w-full h-full object-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="max-w-[1140px] m-auto ">
          <div className="absolute top-[40%]  w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className=" text-4xl font-bold  "> Find Your Special Trip </h1>
          <h2 className="text-4xl italic py-4">With Weekaway</h2>
          <p className=" text-sm mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            doloribus totam dicta ab ratione. Explicabo eveniet dolor, omnis in
            recusandae temporibus suscipit cum nihil officia deserunt possimus
            saepe praesentium accusamus!
          </p>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
