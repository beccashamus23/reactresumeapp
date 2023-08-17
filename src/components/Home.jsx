import React from 'react';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0e013b]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-10 flex sm:text-center flex-col justify-center h-full '>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#fad9de]'>
          REBECCA SHAMUS
        </h1>
        <h2 className='text-4xl sm:text-xl font-helvetica text-[#ffffff] pt-4'>
          9143934557 | beccashamus@gmail.com | beccashamus23
        </h2>
        <div className = 'justify-center flex max-w-[1000px] pt-8'>
        
        <button type="button" class="text-white border-2 bg-gradient-to-br from-pink-500 to-[#fc88bd]-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-32px rounded-lg text-sm px-10 py-2.5 text-center mr-6 mb-2">
            Education
            <span className='group-hover:rotate-90 duration-300'>
            </span>
          </button>
          <button type="button" class="text-white border-2 bg-gradient-to-br from-pink-500 to-[#fc88bd]-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-32px rounded-lg text-sm px-10 py-2.5 text-center mr-6 mb-2">
            Work Experience
            <span className='group-hover:rotate-90 duration-300'>
            </span>
          </button>
          <button type="button" class="text-white border-2 bg-gradient-to-br from-pink-500 to-[#fc88bd]-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-32px rounded-lg text-sm px-10 py-2.5 text-center mr-6 mb-2">
            Skills
            <span className='group-hover:rotate-90 duration-300'>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;