import {
  HiCollection,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ projects, proposals, users }) {

  return (
    <div className="grid grid-cols-1 gap-x-8 mt-6">
      <Stat
        color="orange"
        title="کاربران"
        value={users}
        icon={<HiUser className="w-20 h-20" />}
      />
      <Stat
        color="primary"
        title="پروژه ها"
        value={projects}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="درخواست ها"
        value={proposals}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
