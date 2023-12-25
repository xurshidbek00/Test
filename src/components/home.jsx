import React from "react";
import logo from "../assets/dalbayob.png"
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai"
function Home2() {
  return (
    <div className="w-full h-[1024px] flex justify-start items-start sm:justify-start sm:items-start flex-col">
      <div className="w-full h-[80px] border-b-[2px] border-[#e5e4e4] pl-[30px] flex">
        <div className="flex w-[600px] h-[80px] justify-start items-center text-[20px] text-[#0094FF]">
          <AiOutlineSearch /><input type="search" className="w-[600px] placeholder:text-[15px]" placeholder="search" />
        </div>
        <div className="flex justify-start items-center w-[300px] h-[80px]">
          <AiOutlineBell className="text-[24px] text-[#0094FF]" />
          <div className="flex ml-[20px]">
            <img src={logo} alt="" />
            <div className="flex flex-col justify-center items-start ml-[10px]">
              <p className="text-[#193951] text-[15px]">Abbos Janizakov</p>
              <p className="text-[#1939513a] text-[11px]">id:12432</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full h-[112px] border-b-[2px] border-[#e5e4e4]">
        <div className="flex  w-[800px] pl-[30px]">
          <div className="flex w-[500px] justify-start items-center">
            <button className="bg-[#016BFF] text-[#fff] text-[17px] w-[135px] h-[50px] rounded-[30px]">Kutilmoqda</button>
            <button className="w-[135px] h-[50px] text-[17px] text-[#193951] hover:bg-[#1939513a] rounded-[30px] duration-[.7s]">Qabul qiligan</button>
            <button className="w-[135px] h-[50px] text-[17px] text-[#193951] hover:bg-[#1939513a] rounded-[30px] duration-[.7s]"></button>
          </div>
          <div className="flex w-[300px] h-[80px] justify-end items-center">
            <form action="/action_page.php">
              <label for="html" className="mr-[10px]">Oxirgilari</label>
              <input type="radio" id="html" name="fav_language" className="mr-[30px]" />
              <label for="css" className="mr-[10px]">Eng so’ngilari</label>
              <input type="radio" id="css" name="fav_language" />
            </form>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="flex w-full flex-col pl-[30px]">
        <div className="flex w-[200px] h-[80px] justify-start items-center">
          <p className="text-[11px]">Eng so’ngi xabarnomalar</p>
        </div>
        {/* CARD */}
        <div className="flex w-[800px] flex-col">
          <div className="flex">
            <div className="flex w-[412px] h-[60px] text-[17px]">
            <p>Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida</p>
          </div>
          <div className="flex w-[380px] h-[50px]">
            <button className="w-[110px] h-[40px] bg-[#D4E0E9] rounded-[5px] text-[13px] mr-[10px]">Bekor qilish</button>
            <button className="w-[130px] h-[40px] bg-[#0094FF] rounded-[5px] text-[#fff] text-[13px]">Tasdiqlash</button>
          </div>
          </div>
          <div className="flex w-[500px] h-[50px] items-center justify-around">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;