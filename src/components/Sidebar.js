import { FaSketch, FaHome, FaSearch, FaStream, FaBook, FaUsers, FaToolbox, FaShoppingCart, FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[180px] h-screen bg-gray-900 text-gray-300 flex flex-col items-center">
      <div className="w-[80%] py-2.5 px-0 mb-2.5 flex items-center border-b border-solid border-gray-500">
        <FaSketch size="2.5rem" className="mr-2.5 cursor-pointer pl-2.5" />
        <span className="text-2xl font-bold">App</span>
      </div>
      <div className="w-[85%] py-2.5 px-0 mb-2.5 border-b border-solid border-gray-500">
        <ul>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaHome className="mr-2 w-[30px]" />
            <span className="list-item-text">Dashboard</span>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaSearch className="mr-2 w-[30px]" />
            <span className="list-item-text">Search</span>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaStream className="mr-2 w-[30px]" />
            <span className="list-item-text">Insights</span>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaBook className="mr-2 w-[30px]" />
            <span className="list-item-text">Docs</span>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaUsers className="mr-2 w-[30px]" />
            <span className="list-item-text">Community</span>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaToolbox className="mr-2 w-[30px]" />
            <span className="list-item-text">Tools</span>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaShoppingCart className="mr-2 w-[30px]" />
            <span className="list-item-text">Market</span>
          </li>
          <li className="flex justify-start items-center px-2 text-xl font-medium mb-2.5 cursor-pointer p-2.5 rounded-[10px] hover:bg-gray-700 hover:text-white active:bg-gray-700 active:text-white">
            <FaQuestionCircle className="mr-2 w-[30px]" />
            <span className="list-item-text">Resources</span>
          </li>
        </ul>
      </div>
      <div className="w-[80%] py-2.5 px-0 mb-2.5 flex justify-center items-center">
        <div className="w-8 h-8 border border-solid border-gray-500 cursor-pointer mr-3 rounded-[5px] bg-gray-900"></div>
        <div className="w-8 h-8 border border-solid border-gray-500 cursor-pointer mr-3 rounded-[5px] bg-blue-900"></div>
        <div className="w-8 h-8 border border-solid border-gray-500 cursor-pointer mr-3 rounded-[5px] bg-white"></div>
      </div>
    </div>
  );
};
export default Sidebar;
