import { H3, Button } from "@/components";
import { useState } from "react";

export function ListPortofolio(props: any) {
  const [open, setOpen] = useState(true);
  const {
    title,
    children,
    repositoryUrl,
    repositoryText,
    linkUrl,
    linkText,
    figmaUrl,
    figmaText,
  } = props;
  return (
    <>
      <div className="flex flex-row justify-between items-center mt-[32px]">
        <H3>{title}</H3>
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
      <div className="border-[1px] border-secondary-200 mb-[16px]" />
      <div
        className={`${
          open ? "max-h-0" : "max-h-[100vh]"
        } flex flex-col gap-y-5 overflow-hidden text-justify duration-1000 mt-[16px]`}>
        {children}
        <div className="flex flex-row gap-x-[8px]">
          {repositoryUrl && repositoryText != null && (
            <Button href={repositoryUrl} text={repositoryText} />
          )}
          {figmaUrl && figmaText != null && (
            <Button href={figmaUrl} text={figmaText} />
          )}
          {linkUrl && linkText != null && (
            <Button href={linkUrl} text={linkText} />
          )}
        </div>
      </div>
    </>
  );
}

export default ListPortofolio;
