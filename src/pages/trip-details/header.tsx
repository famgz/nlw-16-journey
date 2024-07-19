import { CalendarIcon, MapPinIcon, Settings2Icon } from 'lucide-react';
import Button from '../../components/button';
import VerticalSeparator from '../../components/vertical-separator';
import { formatEventStartAndEndDate } from '../../lib/utils';
import { TripDetails } from '../../types/trip';

interface DestinationAndDateHeaderProps {
  trip: TripDetails;
}

export default function DestinationAndDateHeader({
  trip,
}: DestinationAndDateHeaderProps) {
  return (
    <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPinIcon className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{trip.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <CalendarIcon className="size-5 text-zinc-400" />
          <span className="text-zinc-100">
            {formatEventStartAndEndDate(
              {
                from: new Date(trip.starts_at),
                to: new Date(trip.ends_at),
              },
              'long'
            )}
          </span>
        </div>

        <VerticalSeparator />

        <Button variant="secondary">
          Alterar local/data
          <Settings2Icon className="size-5" />
        </Button>
      </div>
    </div>
  );
}
