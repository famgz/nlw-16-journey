import {
  ArrowRightIcon,
  AtSignIcon,
  CalendarIcon,
  MapPinIcon,
  PlusIcon,
  Settings2Icon,
  UserRoundPlusIcon,
  XIcon,
} from 'lucide-react';
import { FormEvent, useState } from 'react';

function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState(['example@email.us']);

  function openGuestsInput() {
    setIsGuestInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestModalOpen(false);
  }

  function addNewEmailToInvite(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const email = data.get('email')?.toString()?.trim();
    if (!email) {
      return;
    }
    if (emailsToInvite.includes(email)) {
      return;
    }
    setEmailsToInvite((prev) => [...prev, email]);
    ev.currentTarget.reset();
  }

  function removeEmailFromInvites(emailToRemove: string) {
    setEmailsToInvite((prev) =>
      prev.filter((email) => email !== emailToRemove)
    );
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-pattern w-full max-w-[720px] space-y-10 bg-center bg-no-repeat px-6 text-center">
        <div className="flex-center flex-col gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
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

            <div className="h-6 w-px bg-zinc-800" />

            {isGuestInputOpen ? (
              <button
                className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700"
                onClick={closeGuestsInput}
              >
                Alterar local/data
                <Settings2Icon className="size-5" />
              </button>
            ) : (
              <button
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
                onClick={openGuestsInput}
              >
                Continuar
                <ArrowRightIcon className="size-5" />
              </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
              <button
                type="button"
                className="flex flex-1 items-center gap-2"
                onClick={openGuestsModal}
              >
                <UserRoundPlusIcon className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-400">
                  Quem estará na viagem?
                </span>
              </button>

              <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRightIcon className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br />
          com nossos{' '}
          <a className="text-zinc-300 hover:underline" href="">
            termos de uso
          </a>{' '}
          e{' '}
          <a className="text-zinc-300 hover:underline" href="">
            políticas de privacidade.
          </a>
        </p>
      </div>

      {isGuestModalOpen && (
        <div className="flex-center fixed inset-0 bg-black/90">
          <div className="shadow-shape w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button onClick={closeGuestsModal}>
                  <XIcon className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
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

            <div className="h-px w-full bg-zinc-800" />

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

              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
              >
                Convidar
                <PlusIcon className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
