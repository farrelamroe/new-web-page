export function H1(props: any) {
  const { className, children } = props;
  return (
    <p
      className={` text-[52px] leading-[42px] lg:text-[55px] lg:leading-[68px] ${className}`}>
      {children}
    </p>
  );
}

export default H1;
