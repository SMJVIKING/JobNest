import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "../ui/DarkModeToggle";
import Logout from "../features/authentication/Logout";

function HeaderMenu() {
  return (
    <ul className="flex gap-x-4 items-center">
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Link to="dashboard">
          <HiOutlineUser className="w-7 h-7 text-secondary-500" />
        </Link>
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;

/* <button></button> =>اینجا میتونستی ب جای لینک از باتن استفاده کنی */
// ولی برای انتقالش ب صفحه دیگه باید از نویگیت استفاده کنی
