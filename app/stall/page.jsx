"use client";
import { Tabs } from "@mantine/core";
// import Photo from "../../components/stall/photo";
import photos from "../../components/json/card.json";
import Review from "../../components/stall/review";
import Menu from "../../components/stall/menu";
// Second tab panel will be mounted only when user activates second tab

const page = () => {
  return (
    <>
      <div className="w-11/12 m-auto mt-5">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl py-2">Roll milega</h1>
            <h3 className="text-slate-400 text-lg">
              Rolls,chinese,italian,Fast food,Sichan
            </h3>
            <h3 className="text-slate-300">Park street,kolkata</h3>
            <p className="text-slate-400">
              <span className="text-red-600">Open - </span> 11am - 3am
            </p>
          </div>
          <div>
            <h1 className="border-2 border-green-600 rounded-lg p-3 bg-lime-500 text-white">
              <span className="font-bold">Rating - </span>4.5
            </h1>
          </div>
        </div>
        <div></div>

        {/* tabs */}

        <div className="m-5">
          <Tabs color="teal" defaultValue="first">
            <Tabs.List>
              <Tabs.Tab value="first" className="text-2xl">
                Menu
              </Tabs.Tab>
              <Tabs.Tab value="second" className="text-2xl">
                Photos
              </Tabs.Tab>
              <Tabs.Tab value="third" className="text-2xl">
                Reviews
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="first" pt="xs">
              <Menu />
            </Tabs.Panel>

            <Tabs.Panel value="second" pt="xs">
              {photos.photo.map((val, index) => {
                return (
                  <img
                    className="w-1/4 h-auto rounded-lg drop-shadow-lg m-5"
                    src={val}
                    alt=""
                    key={index}
                  />
                );
              })}
            </Tabs.Panel>
            <Tabs.Panel value="third" pt="xs">
              <Review />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default page;
