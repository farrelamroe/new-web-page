export function Container(props: any) {
  const { children, background } = props;
  return (
    <main
      className="p-[64px] font-garamond bg-primary-100 h-screen overflow-y-auto max-w-[100vw] text-secondary-200 right-0 relative items-end overflow-x-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}>
      {children}
    </main>
  );
}

export default Container;
