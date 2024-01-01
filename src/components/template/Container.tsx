export function Container(props: any) {
  const { children } = props;
  return (
    <main className="p-[64px] font-garamond bg-primary-100 h-screen overflow-y-auto max-w-[100vw] text-secondary-200 right-0 relative items-end lg:max-w-[75vw] overflow-x-hidden">
      {children}
    </main>
  );
}

export default Container;
