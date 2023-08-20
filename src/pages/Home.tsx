import { useState } from "react";
import { BoltIcon } from "../assets/bolt";
import RedDot from "../assets/redDot.png";
import { Layout } from "../components/layout/Layout";

export const Home = () => {
  const [fade, setFade] = useState(true);
  const [intervalObj, setIntervalObj] = useState<NodeJS.Timeout>();
  return (
    <Layout>
      <>
        <div className="grid md:grid-cols-2 grid-cols-1 h-full">
          <div className="flex flex-col justify-center md:mx-20 mx-10 ">
            <div className="font-extrabold text-3xl justify-center font-poppins">
              Hi, I am Zarish Iqbal. I love to
            </div>
            <div className="flex items-center font-poppins font-semibold mt-6 md:gap-4 gap-0">
              Design{" "}
              <span>
                <img className="w-6" src={RedDot} />
              </span>{" "}
              Develop{" "}
              <span>
                <img className="w-6" src={RedDot} />
              </span>
              Learn
            </div>
            <div className="flex mt-4 gap-2 items-center">
              <div className="bg-primary text-white py-1 px-2">
                Got a Project?
              </div>
              <div className="border-primary border dark:border-white py-1 px-2">
                Connect
              </div>
            </div>
          </div>

          <div className="md:flex justify-end items-center relative hidden">
            <div className="absolute w-20 h-6 rounded-full bg-[#828282] right-40 z-0 mb-16"></div>
            <div className="absolute w-20 h-6 rounded-full bg-[#828282] right-40 z-0 mt-16"></div>
            <div
              className={`transition-all duration-100 absolute z-20 right-16    ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <BoltIcon />
            </div>
            <div
              className="bg-[#4F4F4F] w-48 h-44 rounded-tl-[45px] rounded-bl-[45px] overflow-hidden z-10"
              onMouseOut={() => {
                clearInterval(intervalObj);
                setFade(true);
              }}
              onMouseEnter={() => {
                clearInterval(intervalObj);
                setIntervalObj(
                  setInterval(() => {
                    setFade((f) => !f);
                  }, 200)
                );
              }}
            ></div>
          </div>
        </div>
        <div className="absolute bottom-20 w-[100vw] flex justify-center">
          <div className="md:hidden justify-end items-center flex rotate-90 ">
            <div className="absolute w-20 h-6 rounded-full bg-[#828282] right-40 z-0 mb-16"></div>
            <div className="absolute w-20 h-6 rounded-full bg-[#828282] right-40 z-0 mt-16"></div>
            <div
              className={`transition-all duration-100 absolute z-20 right-16    ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <BoltIcon />
            </div>
            <div
              className="bg-[#4F4F4F] w-48 h-44 rounded-tl-[45px] rounded-bl-[45px] overflow-hidden z-10"
              onMouseOut={() => {
                clearInterval(intervalObj);
                setFade(true);
              }}
              onMouseEnter={() => {
                clearInterval(intervalObj);
                setIntervalObj(
                  setInterval(() => {
                    setFade((f) => !f);
                  }, 200)
                );
              }}
            ></div>
          </div>
        </div>
      </>
    </Layout>
  );
};
