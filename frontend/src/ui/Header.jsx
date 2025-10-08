// رفرش توکن و اکسس توکن هر کاربر مخصوص خودشه

import { HiMenu } from "react-icons/hi";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import useUser from "../features/authentication/useUser";

function Header({ onMenuClick }) {
    const { isLoading } = useUser();

  return (
    <header
      className="bg-secondary-0 py-4 px-8 border-b border-secondary-200
      flex items-center justify-between w-full shadow-md sticky top-0 transition-all duration-200  z-10"
    >
      <div className={`container xl:max-w-screen-lg flex justify-end items-center gap-x-8
        ${isLoading? "blur-sm opacity-50" : ""}
        `}>
        <UserAvatar />
        <HeaderMenu />
      </div>

      <button
        className="md:hidden text-3xl text-secondary-500"
        onClick={onMenuClick}
      >
        <HiMenu/>
      </button>
    </header>
  );
}

export default Header;
