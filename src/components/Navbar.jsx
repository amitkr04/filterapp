// import React from "react";

// function Navbar() {
//   return (
//     <>
//       <div className="navbar bg-slate-600">
//         <div className="flex-1">
//           <a className=" bg-slate-600 text-xl text-white">SearchFilter App</a>
//         </div>
//         <div className="flex-none gap-5">
//           <div className="navbar-end">
//             <a className="btn w-5 md:w-auto">Register</a>
//           </div>
//           <div className="dropdown dropdown-end">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle avatar"
//             >
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="Tailwind CSS Navbar component"
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-slate-600 px-4 py-2">
      <div className="flex-1">
        <a className="text-xl text-white font-bold">SearchFilter App</a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex-none lg:hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Links and Profile */}
      <div className="hidden lg:flex flex-none gap-5">
        <a className="btn  w-full md:w-auto">Register</a>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown for Menu */}
      <div className="lg:hidden dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="User avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
