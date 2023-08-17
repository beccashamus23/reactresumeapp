import React from 'react';
import { data } from "../data/data.js";


const Work = () => {
    const project = data;
  return (
    <div name='work' className='w-full md:h-screen text-gray-100 bg-[#04013b]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='sm:text-center font-helvetica pb-8'>
          <p className='text-5xl font-bold inline border-b-4 border-pink-500'>
            WORK EXPERIENCE
          </p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid Item */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#3737b0] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100">
      <p className="text-1xl font-bold text-white tracking-wider">
        {item.name}
      </p>
      <p className = "text-1xl text-white tracking-wider ">
        {item.position}
      </p>
      <p className = "italic text-white tracking-wider ">
        {item.date}
      </p>
    </div>
  </div>
))}
</div>
      </div>
    </div>
  );
};

export default Work;
