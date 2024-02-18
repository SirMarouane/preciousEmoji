import React from 'react'
import Chien from "./../assets/images/Avatars/Avatar 5.png"
import Blue from "./../assets/images/Avatars/Avatar 4.png"
import Fantom from "./../assets/images/Avatars/Avatar 3.png"
import Devil from "./../assets/images/Avatars/Avatar 2.png"
import Star from "./../assets/images/Avatars/Avatar 1.png"
import Plus from "./../assets/images/plus.png"

export default function ProjectsPage() {
  return (
    <div className='w-screen h-screen text-black ps-14'>
        <div className='text-[40px] pb-10 pt-14 '>Upload Your Project</div>

        <div className='flex items-center font-semibold pb-10'>
            <p>Add team members</p>

            <div className='flex gap-4 ps-16'>
                <img src={Chien} alt="" className='rounded-full w-12 h-12'/>
                <img src={Blue} alt=""  className='rounded-full w-12 h-12'/>
                <img src={Fantom} alt=""  className='rounded-full w-12 h-12'/>
                <img src={Devil} alt=""  className='rounded-full w-12 h-12'/>
                <img src={Star} alt=""  className='rounded-full w-12 h-12'/>
                <img src={Plus} alt="" className='rounded-full w-[17px] h-[17px] mt-3'/>
            </div>
        </div>

        <div className='flex font-semibold gap-4 pb-6'>
            <p className='pr-14'>Title of the project</p>
            <p contentEditable='true' className='bg-white w-[30%] h-[50px] rounded-[15px] ps-4 outline-none  hover:shadow-rose-100 hover:shadow-inner'></p>
        </div>

        <div className='flex font-semibold gap-4 pb-6'>
            <p className='pr-10 '>Describe the content</p>
            <p contentEditable='true' className='bg-white w-[30%] h-[100px] rounded-[15px]  ps-3 outline-none hover:shadow-rose-100 hover:shadow-inner'></p>
        </div>

        <div className='flex font-semibold gap-4 pb-12'>
            <p className='pr-[9%]'>Upload a file</p>
            <p contentEditable='true' className='bg-white w-[30%] h-[100px] rounded-[15px] ps-3 outline-none hover:shadow-rose-100 hover:shadow-inner'></p>
        </div>

    </div>
  )
}
