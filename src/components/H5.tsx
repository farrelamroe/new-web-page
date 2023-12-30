export function H5(props: any) {
  const { className, children } = props;
  return (
    <p
      className={` text-[16px] leading-[20px] lg:text-[18px] lg:leading-[22px] ${className}`}>
      {children}
    </p>
  );
}

export default H5;
