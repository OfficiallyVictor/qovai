import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function NavBar() {
  const links = ["platform", "resource", "pricing"];
  const [opened, setOpened] = useState(false)
  return (
    <div className="h-14 lg:h-16 flex relative z-[5000] border-b-2 border-gray-600 px-7 lg:px-0 lg:mx-10   justify-between items-center ">
      <div className="flex gap-2 items-center">
        <img src="/logo.png" className="h-5 lg:h-7" alt="" />
        <img src="/logo1.svg" className="h-3 lg:h-4" alt="" />
      </div>
      <div className={` fixed bg-gradient-to-b from-[#ffd5f5] to-[lightblue] z-500 ${opened ?"left-0 opacity-100" : "-left-[100vw] sm:opacity-100 opacity-0"} duration-500 text-sm md:text-[15px] lg:text-base top-14 flex-col px-10 py-7 h-[calc(100vh-56px)] w-full  border-gray-600 flex font-bold gap-7 lg:gap-10
      
      sm:static sm:h-auto sm:flex-row sm:from-transparent sm:to-transparent sm:top-auto sm:left-auto sm:w-auto sm:bg-transparent sm:py-0 sm:px-0
      `}>
        {links.map((el) => (
          <a href={`/${el}`} className="capitalize">
            {el}
          </a>
        ))}
      </div>
      <p className="lg:pl-10 text-sm lg:text-base pl-5 sm:pl-7 hidden sm:block border-gray-800 font-bold border-l-2">
        7 DAYS FREE TRIAL
      </p>
      <FaBars className="text-lg sm:hidden cursor-pointer" onClick={() => setOpened(!opened)}/>
    </div>
  );
}
