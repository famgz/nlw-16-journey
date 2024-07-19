import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  Settings2Icon,
  XIcon,
} from 'lucide-react';
import { useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Button from '../../../components/button';
import VerticalSeparator from '../../../components/vertical-separator';
import { formatEventStartAndEndDate } from '../../../lib/utils';

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) => void;
  eventStartAndEndDate: DateRange | undefined;
  setEventStartAndEndDate: (dates: DateRange | undefined) => void;
}

export default function DestinationAndDateStep({
  isGuestInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  setEventStartAndEndDate,
  eventStartAndEndDate,
}: DestinationAndDateStepProps) {
  const [isDatePickerModalOpen, setIsDatePickerModalOpen] = useState(false);

  function openDatePickerModal() {
    setIsDatePickerModalOpen(true);
  }

  function closeDatePickerModal() {
    setIsDatePickerModalOpen(false);
  }

  const displayedDate = formatEventStartAndEndDate(
    eventStartAndEndDate,
    'short'
  );

  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPinIcon className="size-5 text-zinc-400" />
        <input
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
          type="text"
          placeholder="Para onde você vai?"
          disabled={isGuestInputOpen}
          onChange={(ev) => setDestination(ev.target.value)}
        />
      </div>

      <button
        className="flex items-center gap-2 text-left"
        disabled={isGuestInputOpen}
        onClick={openDatePickerModal}
      >
        <CalendarIcon className="size-5 text-zinc-400" />
        <span className="whitespace-nowrap text-zinc-400">
          {displayedDate || 'Quando?'}
        </span>
      </button>

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

      {/* modal */}
      {isDatePickerModalOpen && (
        <div className="flex-center fixed inset-0 bg-black/90">
          <div className="space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button onClick={closeDatePickerModal}>
                  <XIcon className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <DayPicker
              mode="range"
              selected={eventStartAndEndDate}
              onSelect={setEventStartAndEndDate}
            />
          </div>
        </div>
      )}
    </div>
  );
}
