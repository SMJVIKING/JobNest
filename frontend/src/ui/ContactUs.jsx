export default function ContactUs({ href, icon }) {
  return (
    <div className="flex items-center gap-x-3">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-secondary-700 hover:text-primary-900"
      >
        {icon}
      </a>
    </div>
  );
}
