import { createSignal } from "solid-js";
import { HamburgerLine } from "./HamburgerLine";
import { MenuItems } from "./MenuItems";

export function Hamburger() {
  const [isOpen, setIsOpen] = createSignal(false);

  function onClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  const items = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about/" },
    { label: "Blog", url: "/blog/" },
    { label: "Projects", url: "/projects/" },
  ];
  return (
    <div class="fixed w-full pt-2 lg:hidden">
      <div class="h-6 w-9 flex flex-col justify-between" onClick={onClick}>
        <HamburgerLine isOpen={isOpen()} lineNumber={1} />
        <HamburgerLine isOpen={isOpen()} lineNumber={2} />
        <HamburgerLine isOpen={isOpen()} lineNumber={3} />
      </div>
      <MenuItems isOpen={isOpen()} items={items} />
    </div>
  );
}
