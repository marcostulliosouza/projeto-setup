import { FaChevronRight, FaRegSun, FaTachometerAlt } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className='bg-blue-800 h-screen px-[25px]'>
        <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
            <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">Admin panel</h1>
        </div>
        <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <FaTachometerAlt color="white"/>
          <p className="text-[14px] leading-[20px] font-bold text-white">Dashboard</p>

        </div>
        <div className="pt-[15px] border-b-[1px]  border-[#EDEDED]/[0.3]">
            <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">Interface</p>
            <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
                <div className="flex items-center gap-[10px]">
                    <FaRegSun color="white"/>
                    <p className="text-[14px] leading-[20px] font-normal text-white">Components</p>
                </div>
                <FaChevronRight color="white"/>
            </div>
        </div>
    </div>
  )
}