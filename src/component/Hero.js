import React from 'react';
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
      backgroundPosition: '50%',
      backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')`,
      height: '520px',
    }}>
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
       
              <input
                type="text"
                placeholder=" Search...🔍"
              className='h-16 w-3/4 text-2xl font-bold rounded-xl'
             />
              <button className="text-2xl ml-2 flex items-center bg-teal-500 hover:bg-teal-600 text-white font-extrabold py-5 px-5 rounded-xl cursor-pointer">
               <FaSearch className="mr-2" />  
            </button>
              {/* You can add additional styling or icons for the search bar */}
            </div>
          </div>
        </div>
      
  );
};

export default Hero;
