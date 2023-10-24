import React from 'react'

function score(props) {

    return (
        <div className="mt-2 flex justify-evenly items-center bg-gray w-full h-[130px] overflow-hidden text-center text-13xl text-limegreen font-goldman">
          <div className="text-green-500 text-[20px]">
            <div className=" inline-block  [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Wins
            </div>
            <div className=" text-black text-center  [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
             {props.w}
            </div>
          </div>
          <div className="  text-blue-600 text-[20px]">
            <div className="inline-block  [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Draws
            </div>
            <div className="text-black text-center  [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              {props.d}
            </div>
          </div>
          <div className=" text-red-600 text-[20px]">
            <div className=" inline-block  [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Losses
            </div>
            <div className=" text-black text-center   [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
             {props.l}
            </div>
          </div>
        </div>
      );
}
export default score