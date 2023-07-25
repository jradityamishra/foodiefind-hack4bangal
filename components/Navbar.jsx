"use client";

import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Profile from "../components/ProfileBadge/ProfileBadge";
import Link from "next/link";

const Navbar = () => {
  const { data } = useSession();
  // console.log(process.env.NEXT_PUBLIC_MONGODB_URI);
  let Links = [
    { name: "Explore", link: "/explore" },
    { name: "Outlets", link: "/" },
    { name: "Feed", link: "/reels" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="m-auto border-2 w-11/12 mt-5 rounded-lg sticky top-0">
      <div className="md:flex items-center justify-between md:px-10 px-7 mt-1 shadow-xl border-slate-400 border-1 bg-white">
        {/* logo section */}
        <div className="font-bold text-xl cursor-pointer flex items-center gap-1">
          <Link href={"/"} className="font-bold ">
            FoodieFind
          </Link>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex ml-6 md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, key) => (
            <li className="md:ml-8 text-md  md:my-0 my-7 font-normal py-3 px-2">
              <Link
                href={link.link}
                className="text-slate-900 hover:text-slate-700 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <div className="flex visible md:invisible">
            {data ? (
              <Link href={"/profile"}>
                <Profile image={data?.user?.image} name={data?.user?.name} />
              </Link>
            ) : (
              <button
                className="bg-[#F7D060] p-2 text-white md:ml-8 text-md font-bold rounded duration-500 md:static"
                onClick={signIn}
              >
                SignIn
              </button>
            )}
          </div>
        </ul>

        <div className="flex invisible md:visible">
          {data ? (
            <Link href={"/profile"}>
              <Profile image={data?.user?.image} name={data?.user?.name} />
            </Link>
          ) : (
            <button
              className=" bg-yellow-400 p-2 px-3 text-white md:ml-8 text-sm rounded font-semibold duration-500 md:static"
              onClick={signIn}
            >
              SignIn
            </button>
          )}
        </div>

        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
