import {
  MapPinIcon,
  CalendarIcon,
  Settings2Icon,
  ArrowRightIcon,
} from 'lucide-react';
import VerticalSeparator from '../../../components/vertical-separator';
import Button from '../../../components/button';

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

export default function DestinationAndDateStep({
  isGuestInputOpen,
  closeGuestsInput,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPinIcon className="size-5 text-zinc-400" />
        <input
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
          type="text"
          placeholder="Para onde você vai?"
          disabled={isGuestInputOpen}
        />
      </div>

      <div className="flex items-center gap-2">
        <CalendarIcon className="size-5 text-zinc-400" />
        <input
          className="w-28 bg-transparent text-lg placeholder-zinc-400 outline-none"
          type="text"
          placeholder="Quando?"
          disabled={isGuestInputOpen}
        />
      </div>

      <VerticalSeparator />

      {isGuestInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2Icon className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          Continuar
          <ArrowRightIcon className="size-5" />
        </Button>
      )}
    </div>
  );
}
