import React from 'react'
import Paper from './paper.svg'
import Scissor from './scissors.svg'
import Stone from './stone.svg'
function user(props) {
    return (
        <div className=" p-1 rounded-[50px] bg-whitesmoke w-[258px] h-[200px] overflow-hidden text-center text-[40px] text-black font-goldman">
          <div className=" ">
            user
          </div>
          <img
            className=" h-[150px] w-[150px]"
            alt=""
            src={props.u}
          />
        </div>
      );
}
export default user
