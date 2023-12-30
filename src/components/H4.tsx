export function H4(props: any) {
  const { className, children } = props;
  return (
    <p
      className={` text-[18px] leading-[22px] lg:text-[20px] lg:leading-[24px] ${className}`}>
      {children}
    </p>
  );
}

export default H4;
