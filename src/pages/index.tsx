import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import {
  Profile,
  Text,
  Summary,
  Education,
  Work,
  Organization,
  H2,
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [page, setPage] = useState(0);
  const nav = [
    {
      SetPage: 0,
      text: "Profile",
    },
    {
      SetPage: 1,
      text: "Summary",
    },
    {
      SetPage: 2,
      text: "Education",
    },
    {
      SetPage: 3,
      text: "Work Experience",
    },
    {
      SetPage: 4,
      text: "Organization",
    },
  ];
  return (
    <>
      <nav className="min-w-[25vw] bg-primary-100 h-screen fixed border-r-2 border-secondary-200 z-[110]">
        <div className="flex flex-col justify-center items-start pl-[64px] gap-y-5 font-garamond relative top-[50%] translate-y-[-50%] text-secondary-200">
          {nav.map(({ SetPage, text }) => {
            return (
              <button onClick={() => setPage(SetPage)} key={text}>
                <H2 className="hover:font-bold duration-300">{text}</H2>
              </button>
            );
          })}
        </div>
      </nav>
      <main className="w-[75vw] absolute right-0">
        {page === 0 && <Profile />}
        {page === 1 && <Summary />}
        {page === 2 && <Education />}
        {page === 3 && <Work />}
        {page === 4 && <Organization />}
      </main>
    </>
  );
}
