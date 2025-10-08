// function AboutMe() {
//   return (
//     <div className="w-full min-h-screen bg-secondary-0 py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-primary-900 mb-8">
//           درباره من
//         </h2>

import List from "./List";

//         <div className="mb-12">
//           <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
//             من کی هستم؟
//           </h2>
//           <p className="text-lg text-secondary-600 leading-relaxed">
//             سلام! من <strong>سودا مهدیزاده</strong> هستم، توسعه‌دهنده فرانت‌اند
//             طی دو سال اخیر، در مسیر یادگیری و کار عملی در حوزه فرانت‌اند پیش رفته‌ام و توانسته‌ام پروژه‌های متنوعی را تجربه کنم.
//             علاقه‌مند به یادگیری مداوم، رشد و ارتقاء کیفیت کار خودم هستم و همیشه دنبال چالش‌ها و فرصت‌هایی هستم که بتوانم مهارتم را تقویت کنم.
//           </p>
//         </div>

//         <div className="mb-12">
//           <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
//             مهارت های من
//           </h2>
//           <ul className="rounded-md px-4 py-1 font-bold text-lg text-secondary-100 bg-primary-200">
//             <li>HTML/CSS</li>
//             <li>JAVASCRIPT</li>
//             <li>REACT.JS</li>
//             <li>NEXT.JS</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
//             ابزارهایی که با انها کار کرده ام
//           </h2>
//           <ul className="rounded-md px-4 py-1 font-bold text-lg text-secondary-100 bg-primary-200">
//             <li>VSCODE</li>
//             <li>POSTMAN</li>
//             <li>NODE.JS</li>
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default AboutMe;
const skills = [
  {
    id: 0,
    title: "Html"
  },
  {
    id: 1,
    title: "Css"
  },
  {
    id: 2,
    title: "JavaScript"
  },
  {
    id: 3,
    title: "React.js"
  },
  {
    id: 4,
    title: "Next.js"
  },
]

const tools = [
  {
    id: 0,
    title: "VsCode"
  },
  {
    id: 1,
    title: "PostMan"
  },
  {
    id: 2,
    title: "Node.js"
  },
]


function AboutMe() {
  return (
    <div className="w-full min-h-screen bg-secondary-0 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary-600  mb-8">
          درباره من
        </h2>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
            من کی هستم؟
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            سلام! من <strong>سودا مهدیزاده</strong> هستم، توسعه‌دهنده فرانت‌اند.
            طی دو سال اخیر، در مسیر یادگیری و کار عملی در حوزه فرانت‌اند پیش رفته‌ام و توانسته‌ام پروژه‌های متنوعی را پیاده سازی کنم.
            علاقه‌مند به یادگیری مداوم، رشد و ارتقاء کیفیت کار خودم هستم و همیشه دنبال چالش‌ها و فرصت‌هایی هستم که بتوانم مهارتم را تقویت کنم.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
            مهارت های من
          </h2>
          <List options={skills} />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
            ابزارهایی که با آنها کار کرده‌ام
          </h2>
          <List options={tools} />
        </div>

      </div>
    </div>
  );
}

export default AboutMe;
