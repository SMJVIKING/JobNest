export default function List({options}) {
  return (
    <ul className="flex flex-wrap gap-4">
      {options.map((option) => (
        <li
          key={option.id}
          className="flex items-center justify-center transition-all duration-500 hover:bg-secondary-400 w-24 h-8 bg-secondary-200 text-secondary-800 font-bold rounded-md"
        >
          {option.title}
        </li>
      ))}
    </ul>
  );
}