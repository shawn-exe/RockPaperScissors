import React from 'react'
import Insta from './instagram.svg'
import Linkedin from './linkedin.svg'
import Github from './github.svg'
function footer() {
return (
    <div className=" flex justify-center items-center bg-gray-600 w-full h-[33px] overflow-hidden ] ">
    
      <a href=""><img 
        className=" flex justify-center items-center w-[20px] h-[20px]"
        alt=""
        src={Github}
      /></a>
         <a href="">  <img
        className="ml-4 mr-4 flex justify-center items-center w-[20px] h-[20px]"
        alt=""
        src={Linkedin}
      /></a> 
          <a href="">  <img
        className="flex justify-center items-center w-[20px] h-[20px]"
        alt=""
        src={Insta}
      /></a>
    </div>
  );
}

export default footer