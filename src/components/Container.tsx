export function Container(props: any) {
  const { children } = props;
  return (
    <main className="p-[64px] font-garamond bg-primary-100 h-screen overflow-y-auto max-w-[75vw] text-secondary-200">
      {children}
    </main>
  );
}

export default Container;
