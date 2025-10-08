import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  // querystring:
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
    // options.at(0).value =  options[0].value

  function handleClick(value) {
    searchParams.set(filterField, value);
    // update:
    setSearchParams(searchParams);
    // setSearchParams(value) اگه اینجا فقط ولیو رو بزاریم ورودی دیگه بهش بدیم نمخونه پس سرچ پارامز میزاریم
  }

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span className="font-bold">وضعیت</span>
      <div className="flex items-center gap-x-2 p-1 border border-secondary-100 bg-secondary-0 rounded-lg">
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;
          return (
            <button
              onClick={() => handleClick(value)}
              key={value}
              disabled={isActive}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all 
              duration-200 ${
                isActive
                  ? "!bg-primary-900 text-white"
                  : "bg-secondary-0 text-secondary-800"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Filter;