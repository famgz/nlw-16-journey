import { CircleDashedIcon } from 'lucide-react';

interface GuestProps {
  name: string;
  email: string;
}

export default function Guest({ email, name }: GuestProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-1.5">
        <p className="text-xs text-zinc-100">{name}</p>
        <span className="block truncate text-sm text-zinc-400">{email}</span>
      </div>
      <CircleDashedIcon className="size-5 shrink-0 text-zinc-400" />
    </div>
  );
}
