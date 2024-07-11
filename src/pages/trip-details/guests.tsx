import { UserCogIcon } from 'lucide-react';
import Guest from './guest';
import Button from '../../components/button';

export default function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Convidados</h2>

      {/* convidados */}
      <div className="space-y-5">
        <Guest email="jessica.white@email.com" name="Jessica White" />
        <Guest email="miranda@email.com" name="Dr. Sarah Miranda" />
      </div>

      <Button size="full" variant="secondary">
        <UserCogIcon className="size-5 text-zinc-200" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
