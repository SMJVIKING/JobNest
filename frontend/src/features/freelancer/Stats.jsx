import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import toPersianNumbersWithComma from "../../utils/toPersianNumbersWithComma";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
    <div className="grid grid-cols-1 gap-x-8 mt-6">
      <Stat
        color="primary"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiCollection className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="درخواست های واگذار شده"
        value={acceptedProposals.length}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="orange"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;