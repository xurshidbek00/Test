import { AiOutlineHome } from "react-icons/ai"
import { HiOutlinePresentationChartBar } from "react-icons/hi"
import { FiTrash2 } from "react-icons/fi"
import { FaCog } from "react-icons/fa"
import { LiaArrowCircleLeftSolid } from "react-icons/lia"
function Navbar() {
  return (
    <div className="flex justify-between w-[172px] bg-[#016BFF] h-[1024px]">
<nav className="flex justify-start w-[172px] bg-[#016BFF] flex-col h-[1024px]">
      <div className="flex w-full justify-center items-start h-[100px]">
        <p className="text-[#fff] text-[30px]">Pressa</p>
      </div>
      <div className="flex w-full justify-around flex-col items-start h-[280px] p-[0_30px] text-[#fff]">
        <div className="flex justify-center items-center">
          <AiOutlineHome className="text-[18px] mr-[10px]" /><p className="text-[14px]">Bosh sahifa</p>
        </div>
        <div className="flex justify-center items-center">
          <HiOutlinePresentationChartBar className="text-[18px] mr-[10px]" /><p className="text-[14px]">Statistika</p>
        </div>
        <div className="flex justify-center items-center">
          <FiTrash2 className="text-[18px] mr-[10px]" /><p className="text-[14px]">O’chirilganlar</p>
        </div>
        <div className="flex justify-center items-center">
          <FaCog className="text-[18px] mr-[10px]" /><p className="text-[14px]">Sozlamalar</p>
        </div>
        <div className="flex justify-center items-center">
          <LiaArrowCircleLeftSolid className="text-[18px] mr-[10px]" /><p className="text-[14px]">Chiqish</p>
        </div>

      </div>
      <div className="flex w-full h-[600px] justify-center items-end text-[#fff]">
      <p className="text-[14px]">2022 All Rights</p>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;