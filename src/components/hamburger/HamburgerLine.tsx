interface Props {
  lineNumber: 1 | 2 | 3;
  isOpen: boolean;
}
export function HamburgerLine(props: Props) {
  const { lineNumber } = props;
  const classList = () => {
    const isOpen = props.isOpen;
    return {
      "rotate-35": isOpen && lineNumber === 1,
      "scale-y-0": isOpen && lineNumber === 2,
      "-rotate-35": isOpen && lineNumber === 3,
    };
  };
  return (
    <span
      class="block h-1 w-full rounded-lg bg-slate-950 origin-left ease-in-out duration-500"
      classList={classList()}
    />
  );
}
