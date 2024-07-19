import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

export function formatEventStartAndEndDate(
  eventStartAndEndDate: DateRange | undefined,
  monthOutput: 'short' | 'long'
): string {
  if (!(eventStartAndEndDate?.from && eventStartAndEndDate?.to)) return '';

  const monthCode = monthOutput === 'short' ? 'LLL' : 'LLLL';

  return format(
    eventStartAndEndDate.from,
    `d ' de ' ${monthCode} 'até '`
  ).concat(format(eventStartAndEndDate.to, `d ' de ' ${monthCode}`));
}
