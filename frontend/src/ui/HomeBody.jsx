import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HomeImages from "./HomeImages";
import ContactUs from "./ContactUs";

function HomeBody() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/auth");
  };

  return (
    <div className="w-full min-h-screen bg-secondary-0 text-secondary-100">
      <div className="w-full max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>

            <h1 className="mb-24 font-bold text-2xl text-secondary-800 mt-10 ">
              سلام به <strong>JobNest</strong> خوش اومدی 😉
            </h1>
            <p className="text-xl text-secondary-700 ">
              چه کارفرما باشی چه کارجو، اینجا جاییه که می‌تونی پروژه‌های خودت رو
              پیدا کنی یا بسازی. شروع کن و مسیر جدیدی رو رقم بزن!
            </p>
            <button
              className="bg-primary-700 rounded-xl w-20 p-2 mt-10 text-secondary-800"
              onClick={handleButtonClick}
            >
              بریم ؟
            </button>
            <div className="border-b border-secondary-200 mt-12 md:mt-36"></div>

            <div className="mt-4 space-y-4">
              <h3 className="text-secondary-800 font-sans text-sm">
                ارتباط با ما :
              </h3>
              <div className="flex gap-x-4">
                <ContactUs
                   href="mailto:smjviking@gmail.com"
                  icon={<FaEnvelope className="text-secondary-400 w-8 h-8 cursor-pointer hover:text-primary-700 transition-all duration-300" />}
                />
                <ContactUs
                  href="https://www.linkedin.com/in/sevda-mehdizadeh-89a2572bb/"
                  icon={<FaLinkedin className="text-secondary-400 w-8 h-8 cursor-pointer hover:text-primary-700 transition-all duration-300" />}
                />
                 <ContactUs
                   href="https://github.com/SMJVIKING"
                  icon={<FaGithub className="text-secondary-400 w-8 h-8 cursor-pointer hover:text-primary-700 transition-all duration-300" />}
                />
              </div>
            </div>

          </div>

          <div className="hidden relative  lg:flex flex-col items-end gap-4 m-6">
            <HomeImages
              src="/images/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg"
            />
            <HomeImages
              src="/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
              className="ml-24"
            />
            <HomeImages
              src="/images/domenico-loia-hGV2TfOh0ns-unsplash.jpg"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeBody;
