import { AtSignIcon, UserIcon, XIcon } from 'lucide-react';
import { FormEvent } from 'react';
import Button from '../../components/button';

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (ev: FormEvent<HTMLFormElement>) => void;
}

export default function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="flex-center fixed inset-0 bg-black/90">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button onClick={closeConfirmTripModal}>
              <XIcon className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{' '}
            nas datas de{' '}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <form className="space-y-3" onSubmit={createTrip}>
          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5">
            <UserIcon className="text-5 text-zinc-400" />
            <input
              type="text"
              name="user"
              placeholder="Seu nome completo"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
              required
            />
          </div>

          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5">
            <AtSignIcon className="text-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Seu email pessoal"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
              required
            />
          </div>

          <Button type="submit" size="full" variant="primary">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
