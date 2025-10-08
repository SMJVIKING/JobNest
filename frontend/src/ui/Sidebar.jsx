function Sidebar({children}) {

  return (
    <div className="w-full bg-secondary-0 row-start-1 row-span-2 min-h-screen flex flex-col relative">
      <ul className="flex flex-col gap-y-4 flex-grow mt-4">
        {children}
      </ul>
    </div>
  );
}

export default Sidebar;
