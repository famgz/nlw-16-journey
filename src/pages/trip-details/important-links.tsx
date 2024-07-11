import { PlusIcon, Settings2Icon } from 'lucide-react';
import ImportantLink from './link';
import Button from '../../components/button';

export default function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Links importantes</h2>

      {/* links */}
      <div className="space-y-5">
        <ImportantLink
          title="Reserva AirBnB"
          url="https://www.airbnb.com.br/rooms/10470001131123123123"
        />

        <ImportantLink
          title="Reserva AirBnB"
          url="https://www.airbnb.com.br/rooms/623452345223123123"
        />
      </div>

      <Button size="full" variant="secondary">
        <PlusIcon />
        Cadastrar novo link
        <Settings2Icon className="size-5 text-zinc-200" />
      </Button>
    </div>
  );
}
