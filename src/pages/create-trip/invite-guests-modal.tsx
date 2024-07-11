import { AtSignIcon, PlusIcon, XIcon } from 'lucide-react';
import { FormEvent } from 'react';
import HorizontalSeparator from '../../components/horizontal-separator';
import Button from '../../components/button';

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (ev: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
}

export default function InviteGuestsModal({
  closeGuestsModal,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailFromInvites,
}: InviteGuestsModalProps) {
  return (
    <div className="flex-center fixed inset-0 bg-black/90">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestsModal}>
              <XIcon className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        {/* Emails card list */}
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <div
              className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5 text-zinc-300"
              key={email}
            >
              {email}
              <button onClick={() => removeEmailFromInvites(email)}>
                <XIcon className="size-4 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>

        <HorizontalSeparator />

        <form
          className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 pl-4"
          onSubmit={(ev) => addNewEmailToInvite(ev)}
        >
          <AtSignIcon className="text-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            placeholder="Digite o email do convidado"
            className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            required
          />

          <Button type="submit" variant="primary">
            Convidar
            <PlusIcon className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
