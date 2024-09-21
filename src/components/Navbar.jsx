import React from "react";

function Navbar() {
  return (
    <>
      {/* <div>
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          Welcome to the Search Filter App
        </h1>
        <p className="text-lg text-gray-700 text-center mb-4">
          Easily search and filter items using our intuitive interface.
        </p>
      </div> */}
      <div className="navbar bg-slate-600">
        <div className="flex-1">
          <a className=" bg-slate-600 text-xl text-white">SearchFilter App</a>
        </div>
        <div className="flex-none gap-5">
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div> */}
          <div className="navbar-end">
            <a className="btn w-5 md:w-auto">Register</a>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
