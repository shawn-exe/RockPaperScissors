import React from 'react'
function content() {
    return (
        <div className="relative flex flex-wrap justify-center items-center bg-white w-[510px] h-fit overflow-hidden text-left text-8xl text-black font-coiny mb-5">
          <div className=" w-[480px] h-fit">
            <div className=" text-steelblue inline-block h-fit text-[30.16px] mt-14 ">
              <p className="m-0 drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">{`Welcome to the Ultimate Battle of Wits!! `}</p>
            </div>
            <div className=" font-chivo text-justify inline-block w-[445px]  h-fit">
              <p className="m-0">
                <span className="leading-[36px] text-[16.16px] drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                  Prepare for an epic showdown of strategy, intuition, and sheer
                  luck as you embark on this timeless classic. Are you ready to
                  unleash your inner champion with cunning moves??
                </span>
              </p>
            </div>
            <div className=" inline-block text-[25.16px]  h-[42px]">
              <p className="m-0 drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">This is where legends are born!</p>
            </div>
            <div className=" font-dm-sans inline-block text-[18.16px] h-[41px] drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              <a className='no-underline font-dm-sans text-black decoration-black' href="https://en.wikipedia.org/wiki/Rock_paper_scissors">know more...</a>
            </div>
          </div>
        </div>
      )
}

export default content