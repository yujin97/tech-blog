import { createSignal } from "solid-js";

export function Hamburger() {
  const [isOpen, setIsOpen] = createSignal(false);

  function onClick() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <div class="block" onClick={onClick}>
        Open the menu
      </div>
      {isOpen() && <div class="block">options</div>}
    </>
  );
}
