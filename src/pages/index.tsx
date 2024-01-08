/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import {
  Profile,
  Summary,
  Education,
  Work,
  Organisation,
  H2,
  Certificate,
  Portofolio,
  Skill,
} from "@/components";
import data from "@/components/data/dataNavbar";
import Image from "next/image";

export default function Home() {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [page]);
  return (
    <>
      <nav
        className={`fixed z-[110] h-screen overflow-hidden bg-primary-100 duration-1000 border-r-2 border-secondary-200 font-garamond text-secondary-200 ${
          open ? "w-[75vw]" : "w-0"
        } block lg:hidden`}>
        <div className="flex flex-col justify-start top-[50%] relative translate-y-[-50%] pl-[32px] gap-y-[16px]">
          {data.map(({ SetPage, text, imageUrl }) => {
            return (
              <div
                className="flex flex-row justify-start items-center gap-x-[8px] hover:font-bold duration-300"
                key="">
                <img src={imageUrl} alt="" height={24} width={24} />
                <button onClick={() => setPage(SetPage)} key={text}>
                  <H2
                    className={`text-start ${
                      page === SetPage ? "font-bold" : ""
                    }`}>
                    {text}
                  </H2>
                </button>
              </div>
            );
          })}
        </div>
        <img
          src="/images/heart.svg"
          className="absolute right-2 bottom-2 w-[64px] heart"
          alt=""
        />
        <img
          src="/images/suit-diamond-fill.svg"
          className="absolute top-2 left-2 w-[64px] diamond"
          alt=""
        />
        <img
          src="/images/suit-club-fill.svg"
          className="absolute left-2 bottom-2 w-[64px] club"
          alt=""
        />
        <img
          src="/images/suit-spade-fill.svg"
          className="absolute right-2 top-2 w-[64px] spade"
          alt=""
        />
      </nav>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`${
          open ? "left-[75%]" : "left-0"
        } absolute z-[120] duration-1000 top-[50%] bg-secondary-200 py-[8px] rounded-tr-[8px] rounded-br-[8px] translate-y-[-50%] lg:hidden`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
          className={`${open ? "rotate-180" : "rotate-0"} duration-1000`}>
          <g transform="rotate(-90 512 512)">
            <path
              fill="#000000"
              d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
            />
          </g>
        </svg>
      </button>
      <nav
        className={`fixed z-[100] h-screen overflow-hidden bg-primary-100 duration-1000 border-r-2 border-secondary-200 font-garamond text-secondary-200 max-w-[25vw] hidden lg:block`}>
        <div className="flex flex-col justify-start top-[50%] relative translate-y-[-50%] pl-[32px] gap-y-[16px]">
          {data.map(({ SetPage, text, imageUrl }) => {
            return (
              <div
                className="flex flex-row justify-start items-center gap-x-[8px] hover:font-bold duration-300"
                key="">
                <Image src={imageUrl} alt="" height={24} width={24} />
                <button onClick={() => setPage(SetPage)} key={text}>
                  <H2
                    className={`text-start ${
                      page === SetPage ? "font-bold" : ""
                    }`}>
                    {text}
                  </H2>
                </button>
              </div>
            );
          })}
        </div>
        <img
          src="/images/heart.svg"
          className="absolute right-2 bottom-2 w-[64px] heart"
          alt=""
        />
        <img
          src="/images/suit-diamond-fill.svg"
          className="absolute top-2 left-2 w-[64px] diamond"
          alt=""
        />
        <img
          src="/images/suit-club-fill.svg"
          className="absolute left-2 bottom-2 w-[64px] club"
          alt=""
        />
        <img
          src="/images/suit-spade-fill.svg"
          className="absolute right-2 top-2 w-[64px] spade"
          alt=""
        />
      </nav>
      <main className={`w-[100vw] lg:w-[75vw] absolute right-0 duration-1000`}>
        {page === 0 && <Profile />}
        {page === 1 && <Summary />}
        {page === 2 && <Education />}
        {page === 3 && <Work />}
        {page === 4 && <Organisation />}
        {page === 5 && <Portofolio />}
        {page === 6 && <Certificate />}
        {page === 7 && <Skill />}
      </main>
    </>
  );
}
