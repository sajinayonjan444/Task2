import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Childcard = ({title,bgcolor,description,orientation,num,textcolor,images,}) => {
  return (
    <div>
      {orientation === "horizontal" ? (
        
        <div
          className={`w-full max-w-2xl relative overflow-hidden rounded-3xl p-10 ${bgcolor} ${textcolor} `}
        >
          <a
            href=""
            className="absolute top-6 right-8 flex items-center gap-2 text-xl font-medium "
          >
            View all Courses <HiArrowRight />
          </a>
          <img src={images} className="mt-18 mb-10" />
          <div className="flex items-start gap-4 lg:t-12">
            <div className="relative gap-8">
              <span className="lg:text-[10rem] text-[8rem] font-bold leading-none"> {num}</span>
              <span className="absolute -top-2 lg:-right-4 -right-5 text-6xl font-bold">
                +
              </span>
            </div>

            <div>
              <h2 className="lg:text-3xl text-[17px] font-bold flex items-center gap-2 mt-8">
                {title}
              </h2>
              <p className="lg:text-xl text-[13px]  mt-2 lg:mt-7">{description}</p>
            </div>
          </div>
        </div>
      ) : (
       <div className={`w-full max-w-xl lg:h-124 h-130 rounded-3xl p-10 ${bgcolor} ${textcolor}  `}>
        <div className="flex flex-col relative -rotate-90 lg:top-9 top-22 lg:-left-30 -left-20 ">
          <div className="lg:text-4xl text-2xl pt-3 font-bold text-wrap">
            {title}
          </div>
          <div className="text-[18px] mt-4 font-semibold ">
            {description}
          </div>
          
        </div>
        <div className="relative lg:mt-19 mt-55 ">
          <span className="lg:text-[10rem] text-[7rem] font-bold leading-none"> {num}</span>
              <span className="absolute -top-2 lg:-right-4  text-6xl font-bold">
                +
              </span>
        </div>

      </div>

      )}
    </div>
  );
};

export default Childcard;
