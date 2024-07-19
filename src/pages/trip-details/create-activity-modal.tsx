import { CalendarIcon, TagIcon, XIcon } from 'lucide-react';
import { FormEvent } from 'react';
import Button from '../../components/button';
import { api } from '../../lib/axios';

interface CreateActivityModalProps {
  tripId: string | undefined;
  closeCreateActivityModal: () => void;
  setTripTrigger: React.Dispatch<React.SetStateAction<number>>;
}

export default function CreateActivityModal({
  tripId,
  setTripTrigger,
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  async function createActivity(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!tripId) return;

    const data = new FormData(event.currentTarget);

    const title = data.get('title');
    const occurs_at = data.get('occurs_at');

    if (!(title && occurs_at)) return;

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at,
    });

    setTripTrigger((prev) => prev + 1);

    closeCreateActivityModal();
  }

  return (
    <div className="flex-center fixed inset-0 bg-black/90">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button onClick={closeCreateActivityModal}>
              <XIcon className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5">
            <TagIcon className="text-5 text-zinc-400" />
            <input
              type="text"
              name="title"
              placeholder="Qual a atividade?"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
              required
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5">
            <CalendarIcon className="text-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Seu email pessoal"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none [color-scheme:dark]"
              required
            />
          </div>

          <Button type="submit" size="full" variant="primary">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
