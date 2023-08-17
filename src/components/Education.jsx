import React from 'react';

const Education = () => {
  return (
    <div name='Education' className='w-full h-screen bg-[#04013b] text-gray-100'>
      <div className='flex flex-col justify-center w-full h-full'>
          <div className='sm:text-center font-helvetica'>
            <p className='text-5xl font-bold inline border-b-4 border-pink-500'>EDUCATION</p>
          </div>            
            <div className='sm:text-center font-helvetica pt-8'>
              <p className = 'text-2xl font-bold'>University of Maryland, College Park</p>
              <p className = 'text-1xl italic'>College of Mathematical and Natural Sciences</p>
              <p className = 'text-2xl font-bold'>B.S. Computer Science</p>
              <p className = 'text-1xl'> Expected Graducation - May 2024</p>
          </div>
          <div className = 'font-helvetica text-gray-300 pt-8 sm:text-center'>
            <p className = 'text-1xl font-bold'> Relevant Coursework </p>
            <div className='text-1xl'>
              <p>Algorithms, Artificial Intelligence, Computer Networks, Computer Systems, Data Science, </p> <p>Discrete Structures, Object Oriented Programming I/II, Organization of Programming Languages</p>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Education;
