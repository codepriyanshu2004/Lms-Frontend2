import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Children } from "react";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigte = useNavigate();

  // for checking if user is logged in
  const isLoggin = useSelector((state) => state?.auth?.isLoggedIn);

  // for displaying the options acc to role
  const role = useSelector((state) => state?.auth?.role);

  function changeWidth() {
    const drawer = document.getElementsByClassName("drawer-side");
    drawer[0].style.width = "190px";
  }

  function closeWidth() {
    const drawer = document.getElementsByClassName("drawer-side");
    drawer[0].style.width = "0px";
  }

  const handlelogout = (e) => {
    e.preventDefault();

    // const res = await dispatch(logout());
    //  if(res?.payload?.sucess)
    navigte("/");
  };

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
            <ul className="menu bg-gray-800 text-white min-h-full w-48 p-4">
              {/* Sidebar content here */}
              <li className="w-fit absolute right-2 z-50">
                <button onClick={closeWidth}>
                  <AiFillCloseCircle />
                </button>
              </li>

              <li>
                <Link to="/">Home</Link>
              </li>

              {isLoggin && role === "ADMIN" && (
                <li>
                  <Link to={"/admin/dashboard"}> Admin DashBoard</Link>
                </li>
              )}

              <li>
                <Link to="/courses">All Courses</Link>
              </li>

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

              <li>
                <Link to="/about">About us</Link>
              </li>
              {!isLoggin && (
                <div className="mt-auto flex  gap-8">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    <Link to="/login">Login</Link>
                  </button>

                  <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                    <Link to="/signup">Signup</Link>
                  </button>
                </div>
              )}

              {isLoggin && (
                <div className="mt-auto flex  gap-8">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    <Link to="/user/profile">Profile</Link>
                  </button>

                  <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                    <Link onClick={handlelogout}>Logout</Link>
                  </button>
                </div>
              )}

            </ul>
          </div>
        </div>

        {children}
        <Footer />
      </div>
    </>
  );
}

export default HomeLayout;
