import { UserCogIcon } from 'lucide-react';
import Guest from './guest';
import Button from '../../components/button';
import { Participant } from '../../types/trip';

interface GuestsProps {
  participants: Participant[];
}

export default function Guests({ participants }: GuestsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Convidados</h2>

      {/* convidados */}
      <div className="space-y-5">
        {participants.map((p, i) => (
          <Guest
            email={p.email}
            name={p.name || `Convidado ${i}`}
            is_confirmed={p.is_confirmed}
            key={p.id}
          />
        ))}
      </div>

      <Button size="full" variant="secondary">
        <UserCogIcon className="size-5 text-zinc-200" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
