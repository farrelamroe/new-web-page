export function H2(props: any) {
  const { className, children } = props;
  return (
    <p
      className={` text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] ${className}`}>
      {children}
    </p>
  );
}

export default H2;
