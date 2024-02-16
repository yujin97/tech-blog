import { createSignal } from "solid-js";
import type { JSX } from "solid-js";

import { Navigation } from "./navigation/Navigation";
import { Hamburger } from "./hamburger/Hamburger";
import { MenuItems } from "./hamburger/MenuItems";

const items = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about/" },
  { label: "Blog", url: "/blog/" },
  { label: "Projects", url: "/projects/" },
];

export function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = createSignal(false);

  function onClickHeaderWhenOpen() {
    if (isHamburgerOpen()) {
      setIsHamburgerOpen(false);
    }
  }

  const onClickHamburger: JSX.EventHandler<HTMLDivElement, MouseEvent> = (
    event,
  ) => {
    event.stopPropagation();
    setIsHamburgerOpen((isHamburgerOpen) => !isHamburgerOpen);
  };

  return (
    <>
      <header
        class="fixed top-0 flex h-20 w-full flex-col justify-center px-4 md:px-6"
        onClick={onClickHeaderWhenOpen}
      >
        <Navigation items={items} />
        <Hamburger isOpen={isHamburgerOpen()} onClick={onClickHamburger} />
      </header>
      <MenuItems isOpen={isHamburgerOpen()} items={items} />
      <div class="block h-20"></div>
    </>
  );
}
