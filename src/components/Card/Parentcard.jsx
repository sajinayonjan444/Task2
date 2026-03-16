import React from 'react'
import Childcard from'./Childcard'
import frame from'../../assets/frame.png'
import fire from'../../assets/fire.png'
const courses =[
    {
        id:1,
        title:"All Courses",
        description:"courses you're powering through right now",
        bgcolor:"bg-red-700",
        orientation:"horizontal",
        num:"23",
        textcolor:"text-white",
        images:frame



    },
    {
        id:2,
        title:"Upcoming Courses",
        description:"Exciting new courses waiting to boost your skill",
        bgcolor:"bg-red-100",
        orientation:"vertical",
        num:"05",
        textcolor:"text-red-600"
    },
    {
        id:3,
        title:"Ongoing Courses",
        description:"currently happening-don't miss out on the action",
        bgcolor:"bg-red-100",
        orientation:"vertical",
        num:"10",
        textcolor:"text-red-600",
    },
]

const Parentcard = () => {
  return (
    <div className='mx-auto max-w-7xl p-10'>
        <h1 className='mb-3 text-xm'>Explore our classes and master trending skills!</h1>
        <p className='flex'><span className='text-black-800 font-bold text-xl lg:text-3xl '>Dive into &nbsp;</span> <span className='font-bold text:xl lg:text-3xl text-green-600 flex '>What's Hot Right Now </span> <img src={fire} className='w-[60px]'/></p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[50%_25%_25%]  gap-6 mt-20'>
            {
                courses.map((card)=>(
                    <Childcard key={card.id} {...card}/>
                ))
            }

        </div>

    </div>
  )
}

export default Parentcard