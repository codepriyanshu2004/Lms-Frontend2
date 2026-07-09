import { FiMenu } from "react-icons/fi";

import {AiFillCloseCircle} from "react-icons/ai"
import { Link } from "react-router-dom";
import { Children } from "react";
import Footer from "../Components/Footer";



function HomeLayout({ children }) {

    function changeWidth() {
  const drawer = document.getElementsByClassName("drawer-side");
  drawer[0].style.width = "250px";
}
 
function closeWidth() {
  const drawer = document.getElementsByClassName("drawer-side");
  drawer[0].style.width = "0px";
}
   

  return (
    <>
      <div className="min-h-[90vh] ">
        <div className="drawer absolute left-0 z-50 w-fit">
          <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-1" className="cursor-pointer relative">
              <FiMenu
                onClick={changeWidth}
                size={"32px"}
                className="font-bold text-white m-4"
              />
            </label>
          </div>

          <div className="drawer-side w-0">
            <label
              htmlFor="my-drawer-1"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-100 min-h-full w-48 p-4">
              {/* Sidebar content here */}
              <li className="w-fit absolute right-2 z-50">
                <button onClick={closeWidth}>
                    <AiFillCloseCircle/>
                </button>

              </li>

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/courses">All Courses</Link>
              </li>

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>
        </div>

        {children}
        <Footer/>
      </div>
    </>
  );
}

export default HomeLayout;
