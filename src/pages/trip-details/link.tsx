import { Link2Icon } from 'lucide-react';

interface ImportantLinkProps {
  title: string;
  url: string;
}

export default function ImportantLink({ title, url }: ImportantLinkProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-1.5">
        <p className="text-xs text-zinc-100">{title}</p>
        <a
          href="#"
          className="block truncate text-xs text-zinc-400 hover:text-zinc-300"
        >
          {url}
        </a>
      </div>
      <Link2Icon className="size-5 shrink-0 text-zinc-400" />
    </div>
  );
}
