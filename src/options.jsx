import React from 'react'
import Paper from './paper.svg'
import Scissor from './scissors.svg'
import Stone from './stone.svg'
export default function Options({Cstone,Cpaper,Cscissor}) { 
    return ( 
        <div className=" flex justify-evenly items-center rounded-[50px] bg-whitesmoke w-full h-[100px]">
          <img onClick={Cstone}
            className="cursor-pointer w-[110px] h-[90px] transition-transform transform-gpu hover:scale-125 "
            alt=""
            src={Stone}
          />
          <img onClick={Cpaper}
            className="cursor-pointer w-[80px] h-[80px] transition-transform transform-gpu hover:scale-125 "
            alt=""
            src={Paper}
          />
          <img onClick={Cscissor}
            className="cursor-pointer w-[80px] h-[80px] transition-transform transform-gpu hover:scale-125 "
            alt=""
            src={Scissor}
          />
        </div>
      );
}

