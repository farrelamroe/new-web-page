export function H3(props: any) {
  const { className, children } = props;
  return (
    <p
      className={` text-[20px] leading-[24px] lg:text-[24px] lg:leading-[32px] ${className}`}>
      {children}
    </p>
  );
}

export default H3;
