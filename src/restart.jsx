import React from 'react'
import Reset from './reset.svg'
function restart(props) {
    return (
        <div className="relative flex justify-center items-center rounded-[50px] bg-whitesmoke w-[200px] h-[70px] overflow-hidden text-left text-[25px] text-black font-goldman mr-1 hover:bg-gray-300" onClick={props.u}  >
            <div>
              Restart
            </div>
          <img
            className="w-[40px] h-[40px] overflow-hidden ml-2"
            alt="restart"
            src={Reset}
          />
        </div>
      );
}
export default restart