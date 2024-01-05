export function Text(props: any) {
  const { size, children, className } = props;
  let fontSize;
  if (size === "small") {
    fontSize = "text-[10px] lg:text-[12px] leading-[12px] lg:leading-[14px]";
  } else if (size === "regular") {
    fontSize = "text-[12px] lg:text-[14px] leading-[12px] lg:leading-[8px]";
  } else if (size === "big") {
    fontSize = "text-[14px] lg:text-[16px] leading-[18px] lg:leading-[20px]";
  }
  return <p className={`${fontSize} ${className}`}>{children}</p>;
}

export default Text;
