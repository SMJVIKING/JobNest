export default function HomeImages({ src, alt = "programming", className }) {
    return (

        <img
            className={`shadow-xl w-64 h-44 rounded-3xl transform hover:scale-105 transition-transform duration-300
               ${className}`}
            src={src}
            alt={alt}
        />
)}