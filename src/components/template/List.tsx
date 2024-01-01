import { H3 } from "@/components";
import { useState } from "react";

export function List(props: any) {
  const [open, setOpen] = useState(true);
  const { title, time, position, children } = props;
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start mt-[32px] gap-y-[16px]">
        <H3>{title}</H3>
        <H3>{time}</H3>
      </div>
      <div className="border-[1px] border-secondary-200 mb-[16px]" />
      <div className="flex flex-row gap-x-[5px] items-center mt-[16px]">
        <H3>{position}</H3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={() => setOpen((prev) => !prev)}
          className={`${
            open ? "rotate-0" : "-rotate-90"
          } duration-300 hover:cursor-pointer hover:scale-110`}>
          <path
            fill="#C69749"
            d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"
          />
        </svg>
      </div>
      <div
        className={`${
          open ? "max-h-0" : "max-h-[100vh]"
        } flex flex-col gap-y-5 overflow-hidden text-justify duration-1000 mt-[16px]`}>
        {children}
      </div>
    </>
  );
}

export default List;
