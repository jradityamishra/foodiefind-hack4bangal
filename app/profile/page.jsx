"use client";

import React, { useEffect, useState } from "react";
import photos from "../../components/json/card.json";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";

const page = () => {
  const { data } = useSession();
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // keep id null if in self profile
  return (
    <>
      <div className="w-11/12 m-auto mt-5">
        {/* profile */}
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image
              class="rounded-full"
              src={data?.user?.image}
              width={144}
              height={144}
              alt="Extra large avatar"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-xl">{data?.user?.name}</p>
            <p className="font-normal text-slate-400 text-lg">
              {data?.user?.email}
            </p>
          </div>
        </div>
        {/* follower and likes */}
        <div className="flex justify-center m-5">
          <div className="stats shadow">
            <div className="stat ">
              <div className="stat-figure text-primary"></div>
              <div className="stat-title">Total Follows</div>
              <div className="stat-value text-primary text-center">25</div>
            </div>
          </div>
        </div>
        {/* follow button */}
        {id ? (
          <div className="m-5">
            <button className="w-full bg-blue-500 text-white rounded-lg">
              FOLLOW
            </button>
          </div>
        ) : (
          ""
        )}

        {/* line  */}
        <div className="w-full h-0.5"></div>
        {/* picture */}

        <div className="w-11/12 m-auto flex flex-wrap justify-around">
          {photos.photo.map((val) => {
            return (
              <img
                className="w-1/4 h-auto rounded-lg drop-shadow-lg m-5"
                src={val}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
