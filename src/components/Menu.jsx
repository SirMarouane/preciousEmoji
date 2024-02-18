import React from 'react'
import Chien from "./../assets/images/Avatars/avatar5modif.png";

export default function Menu(props) {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center text-black'>
        <div className="flex items-center justify-center w-[140px] h-[40px] bg-white/65 rounded-[15px] hover:bg-rose-200 hover:shadow-2xl hover:shadow-black">
          Your P-Mojis
        </div>

        <div className="flex items-center gap-10 pt-10">
          <div className="flex items-center justify-center w-[100px] h-[40px] bg-white/65 rounded-[15px] hover:bg-rose-200 hover:shadow-2xl hover:shadow-black">
            Send
          </div>

          <div className="flex items-center justify-center w-[150px] ">
              <img className="rounded-full" src={Chien} alt=""/>
          </div>

          <div onClick={() => {props.setChangePage("Projects")}}
          className="flex items-center justify-center w-[100px] h-[40px] bg-white/65 rounded-[15px] hover:bg-rose-200 hover:shadow-2xl hover:shadow-black">
            Projects
          </div>
        </div>

        <div className="flex justify-center w-[90vw] gap-[10%] pb-10 pt-6">
          <div className="flex items-center justify-center w-[100px] h-[40px] bg-white/65 rounded-[15px] hover:bg-rose-200 hover:shadow-2xl hover:shadow-black">
            Feed
          </div>

          <div className="flex items-center justify-center w-[100px] h-[40px] bg-white/65 rounded-[15px] hover:bg-rose-200 hover:shadow-2xl hover:shadow-black">
            Lab
          </div>
        </div>

        <div className="flex items-center justify-center w-[100px] h-[40px] bg-white/25 rounded-[15px] hover:bg-violet-400 hover:shadow-2xl hover:shadow-black">
          Settings
        </div>
    </div>
  )
}
