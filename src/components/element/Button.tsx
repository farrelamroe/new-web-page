import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

export function Button(props: any) {
  const { href, text } = props;
  useEffect(()=>{
    AOS.init({duration :1000});
  })
  return (
    <button
      className="relative h-fit w-full max-w-[125px] rounded-[8px] font-garamond font-bold outline duration-300 bg-secondary-200 text-primary-200 outline-secondary-200 hover:text-secondary-200 hover:bg-white hover:outline-secondary-200 px-[28px] py-[10px] outline-2 -outline-offset-1 leading-[24px]"
      onClick={() => window.open(href, "blank")}
      data-aos="fade-left">
      {text}
    </button>
  );
}

export default Button;
