interface Props {
  label: string;
  url?: string;
}

export function NavigationButton({ url, label }: Props) {
  return (
    <a class="text-sm font-medium hover:text-sky-400" href={url}>
      {label}
    </a>
  );
}
