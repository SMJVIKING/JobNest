import { NavLink } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import DarkModeToggle from "../ui/DarkModeToggle";
import Logout from "../features/authentication/Logout";


function Header() {
  const { isLoading, user } = useUser();

  return (
   <header
      className={`shadow-md mb-10 bg-inherit sticky top-0 transition-all duration-200 border-b border-b-secondary-300 z-10
    ${isLoading ? "blur-sm opacity-70" : "blur-0 opacity-100"}`}
    >
      <nav className="container flex justify-between items-center p-2 ">
        <div className="flex items-center gap-2">

          <img
            className="w-10 h-9"
            src="/public/images/splash_1045684.png"
            alt="JobNest image"
          />
          <h1 className="text-xl text-secondary-800 font-bold flex items-center">JobNest</h1>

          <ul className="items-center justify-center gap-x-3 mr-4  hidden md:flex ">
            <li>
              <NavLink
                aria-current="page"
                className="p-2 text-primary-900 text-lg font-semibold transition-all duration-500 rounded-lg hover:bg-primary-200 hover:text-primary-900"
                to="/"
              >
                صفحه اصلی
              </NavLink>
            </li>
            <li>
              <NavLink
                className="p-2 hover:text-primary-900 text-secondary-800 text-lg font-semibold transition-all duration-500 rounded-lg hover:bg-primary-200"
                to="/about-me"
              >
                درباره من
              </NavLink>
            </li>
          </ul>
        </div>

         <div
          className={`flex justify-end items-center gap-x-2 ${
            isLoading ? "blur-sm " : ""
          }`}
        > 
          <div className="flex items-center gap-x-2 text-secondary-600 ">
            <img
              className="w-7 h-7 rounded-full object-cover object-center"
              src="/public/images/3d-simple-user-icon-png.webp"
              alt="user-account"
            />
           <span>{user?.name}</span> 
          </div>
          <ul className="flex gap-x-4 items-center">
            <li className="flex">
              <DarkModeToggle />
            </li>
            <li className="flex">
              <Logout />
            </li>
          </ul> 
       </div> 
      </nav>
      </header>
  );
}

export default Header;

/* <button></button> =>اینجا میتونستی ب جای لینک از باتن استفاده کنی */
// ولی برای انتقالش ب صفحه دیگه باید از نویگیت استفاده کنی


    // <div className="bg-secondary-0 text-secondary-800 p-2 border-b border-secondary-200 shadow-lg">