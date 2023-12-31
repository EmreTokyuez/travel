"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const all_travels = () => {
    router.push("/all_travels");
  };
  const saved_travels = () => {
    router.push("/saved");
  };

  const random_travel = () => {
    router.push("/all_travels");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={saved_travels}>Saved Travels</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Explore</summary>
              <ul className="p-2">
                <li>
                  <a onClick={all_travels}>All Travels</a>
                </li>
                <li>
                  <a onClick={random_travel}>I&apos;m feeling lucky</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Log Out</a>
      </div>
    </div>
  );
};

export default Navbar;
