import { CircleCheckIcon } from 'lucide-react';

interface ActivityProps {
  title: string;
  time: string;
}

export default function Activity({ time, title }: ActivityProps) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
        <CircleCheckIcon className="text-5 text-lime-300" />
        <span className="text-zinc-100">{title}</span>
        <span className="ml-auto text-sm text-zinc-400">{time}</span>
      </div>
    </div>
  );
}
