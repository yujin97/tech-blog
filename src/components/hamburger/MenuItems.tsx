import { splitProps } from "solid-js";

interface Props {
  isOpen: boolean;
  items: ItemProps[];
}

interface ItemProps {
  label: string;
  url: string;
}

export function MenuItems(props: Props) {
  const [reactive, others] = splitProps(props, ["isOpen"]);

  const classList = () => ({
    "translate-x-0": reactive.isOpen,
  });

  return (
    <div
      class="pt-32 shadow-lg shadow-white/50 bg-slate-200/80 h-lvh w-full -translate-x-full flex flex-col ease-in-out duration-500 text-center list-none"
      classList={classList()}
    >
      {others.items.map((item) => (
        <li class="mb-1 text-2xl font-medium list-image-none hover:font-bold hover:text-3xl">
          <a href={item.url}>{item.label}</a>
        </li>
      ))}
    </div>
  );
}
