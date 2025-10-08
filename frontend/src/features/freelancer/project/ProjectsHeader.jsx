import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  {
    label: "مرتب سازی(جدیدترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی(قدیمی ترین)",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    // <div className="flex gap-x-80 items-center justify-between text-secondary-700 mb-12">
    //   <h1 className="text-lg font-bold">لیست پروژه ها</h1>
    //   <div className="flex gap-x-4">
    //     <Filter filterField="status" options={statusOptions} />
        
    //     <FilterDropDown filterField="sort" options={sortOptions} />

    //     <FilterDropDown
    //       filterField="category"
    //       options={[
    //         {
    //           value: "ALL",
    //           label: "دسته بندی(همه)",
    //         },
    //         ...transformedCategories,
    //       ]}
    //     /> 
    //   </div>
    // </div>


    <div className="mb-12 block gap-x-10 items-center justify-between md:flex">
  <div className="flex items-center justify-between text-secondary-700">
    <h1 className="text-lg font-bold">لیست پروژه‌ها</h1>
  </div>
  <div className="mt-4 text-secondary-700 flex items-center flex-col md:flex-row md:gap-x-6 gap-y-4 md:gap-y-0">
    <Filter filterField="status" options={statusOptions} />
    <FilterDropDown filterField="sort" options={sortOptions} />
    <FilterDropDown
      filterField="category"
      options={[
        { value: "ALL", label: "دسته بندی(همه)" },
        ...transformedCategories,
      ]}
    />
  </div>
</div>


  

  );
}

export default ProjectsHeader;
