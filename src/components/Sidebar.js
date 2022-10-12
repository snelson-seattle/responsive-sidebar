import { FaSketch, FaHome, FaSearch, FaStream, FaBook, FaUsers, FaToolbox, FaShoppingCart, FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[180px] h-screen bg-gray-900 text-gray-200 flex flex-col items-center">
      <div className="w-[80%] py-2.5 px-0 mb-2.5 flex items-center bg-blue-600">
        <FaSketch size="2.5rem" className="mr-2.5 cursor-pointer pl-2.5" />
        <span className="text-2xl font-bold">App</span>
      </div>
      <div className="w-[80%] py-2.5 px-0 mb-2.5 bg-blue-600">
        <ul>
          <li className="flex justify-start items-center px-2">
            <FaHome className="" />
            <span className="list-item-text">Dashboard</span>
          </li>
          <li className="flex justify-start items-center px-2">
            <FaSearch />
            <span className="list-item-text">Search</span>
          </li>
          <li className="flex justify-start items-center px-2">
            <FaStream />
            <span className="list-item-text">Insights</span>
          </li>
          <li className="flex justify-start items-center px-2">
            <FaBook />
            <span className="list-item-text">Docs</span>
          </li>
          <li className="flex justify-start items-center px-2">
            <FaUsers />
            <span className="list-item-text">Community</span>
          </li>
          <li className="flex justify-start items-center px-2">
            <FaToolbox />
            <span className="list-item-text">Tools</span>
          </li>
          <li className="flex justify-start items-center px-2">
            <FaShoppingCart />
            <span className="list-item-text">Market</span>
          </li>
          <li className="flex justify-start items-center px-2">
            <FaQuestionCircle className="" />
            <span className="list-item-text">Resources</span>
          </li>
        </ul>
      </div>
      <div className="w-[80%] py-2.5 px-0 mb-2.5 bg-blue-600"></div>
    </div>
  );
};
export default Sidebar;
