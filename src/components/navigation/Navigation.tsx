import { NavigationButton } from "./NavigationButton";

interface Props {
  items: ItemProps[];
}

interface ItemProps {
  label: string;
  url: string;
}

export function Navigation({ items }: Props) {
  return (
    <nav class="hidden lg:flex gap-6">
      {items.map(({ label, url }) => (
        <NavigationButton label={label} url={url} />
      ))}
    </nav>
  );
}
