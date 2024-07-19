import { CheckCircle2Icon, CircleDashedIcon } from 'lucide-react';

interface GuestProps {
  name: string;
  email: string;
  is_confirmed: boolean;
}

export default function Guest({ email, name, is_confirmed }: GuestProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-1.5">
        <p className="text-sm text-zinc-100">{name}</p>
        <span className="block truncate text-xs text-zinc-400">{email}</span>
      </div>
      {is_confirmed ? (
        <CheckCircle2Icon className="size-5 shrink-0 text-lime-500" />
      ) : (
        <CircleDashedIcon className="size-5 shrink-0 text-zinc-400" />
      )}
    </div>
  );
}
