import { useRef } from "react";

import {
  FaSketch,
  FaHome,
  FaSearch,
  FaStream,
  FaBook,
  FaUsers,
  FaToolbox,
  FaShoppingCart,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar = () => {
  const sidebarRef = useRef();

  const toggleDarkTheme = () => {
    sidebarRef.current.classList.remove("bg-blue-900");
    sidebarRef.current.classList.remove("bg-gray-200");
    sidebarRef.current.classList.remove("text-gray-800");
    sidebarRef.current.classList.add("bg-gray-900");
    sidebarRef.current.classList.add("text-gray-300");
  };

  const toggleNightTheme = () => {
    sidebarRef.current.classList.remove("bg-gray-900");
    sidebarRef.current.classList.remove("bg-gray-200");
    sidebarRef.current.classList.remove("text-gray-800");
    sidebarRef.current.classList.add("bg-blue-900");
    sidebarRef.current.classList.add("text-gray-300");
  };

  const toggleLightTheme = () => {
    sidebarRef.current.classList.remove("bg-gray-900");
    sidebarRef.current.classList.remove("bg-blue-900");
    sidebarRef.current.classList.remove("text-gray-300");
    sidebarRef.current.classList.add("bg-gray-200");
    sidebarRef.current.classList.add("text-gray-800");
  };

  return (
    <div
      ref={sidebarRef}
      className="w-[50px] md:w-[180px] h-screen bg-gray-900 text-gray-300 flex flex-col items-center"
    >
      <div className="w-[80%] py-2.5 px-0 mb-2.5 flex items-center border-b border-solid border-gray-500">
        <FaSketch size="2.5rem" className="mr-2.5 cursor-pointer pl-2.5" />
        <p className="hidden md:block md:text-2xl md:font-bold">App</p>
      </div>
      <div className="w-[85%] py-2.5 px-0 mb-2.5 border-b border-solid border-gray-500">
        <ul>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaHome className="mr-2 w-[30px]" />
            <p className="hidden md:block">Dashboard</p>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaSearch className="mr-2 w-[30px]" />
            <p className="hidden md:block">Search</p>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaStream className="mr-2 w-[30px]" />
            <p className="hidden md:block">Insights</p>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaBook className="mr-2 w-[30px]" />
            <p className="hidden md:block">Docs</p>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaUsers className="mr-2 w-[30px]" />
            <p className="hidden md:block">Community</p>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaToolbox className="mr-2 w-[30px]" />
            <p className="hidden md:block">Tools</p>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaShoppingCart className="mr-2 w-[30px]" />
            <p className="hidden md:block">Market</p>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaQuestionCircle className="mr-2 w-[30px]" />
            <p className="hidden md:block">Resources</p>
          </li>
        </ul>
      </div>
      <div className="w-[80%] py-2.5 px-0 mb-2.5 flex flex-col md:flex-row justify-center items-center">
        <div
          onClick={toggleDarkTheme}
          className="w-8 h-8 border border-solid border-gray-500 cursor-pointer mb-3 md:mb-0 md:mr-3 rounded-[5px] bg-gray-900"
        ></div>
        <div
          onClick={toggleNightTheme}
          className="w-8 h-8 border border-solid border-gray-500 cursor-pointer mb-3 md:mb-0 md:mr-3 rounded-[5px] bg-blue-900"
        ></div>
        <div onClick={toggleLightTheme} className="w-8 h-8 border border-solid border-gray-500 cursor-pointer mb-3 md:mb-0 md:mr-3 rounded-[5px] bg-white"></div>
      </div>
    </div>
  );
};
export default Sidebar;
