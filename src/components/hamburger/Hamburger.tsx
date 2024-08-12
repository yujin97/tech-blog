import type { JSX } from "solid-js";
import { HamburgerLine } from "./HamburgerLine";

interface Props {
  isOpen: boolean;
  onClick: JSX.EventHandler<HTMLDivElement, MouseEvent>;
}

export function Hamburger(props: Props) {
  const isOpen = () => props.isOpen;

  return (
    <>
      <div class="fixed lg:hidden" onClick={props.onClick}>
        <div class="h-6 w-9 flex flex-col justify-between">
          <HamburgerLine isOpen={isOpen()} lineNumber={1} />
          <HamburgerLine isOpen={isOpen()} lineNumber={2} />
          <HamburgerLine isOpen={isOpen()} lineNumber={3} />
        </div>
      </div>
    </>
  );
}
