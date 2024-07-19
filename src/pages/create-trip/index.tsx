import { FormEvent, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useNavigate } from 'react-router-dom';
import { api } from '../../lib/axios';
import ConfirmTripModal from './confirm-trip-modal';
import InviteGuestsModal from './invite-guests-modal';
import DestinationAndDateStep from './steps/destination-and-date-step';
import InvitGuestStep from './steps/invite-guests-step';

function CreateTripPage() {
  const navigate = useNavigate();
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const [destination, setDestination] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [emailsToInvite, setEmailsToInvite] = useState(['example@email.us']);
  const [eventStartAndEndDate, setEventStartAndEndDate] = useState<
    DateRange | undefined
  >();

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

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  async function createTrip(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    if (!destination) return;

    if (!(ownerName && ownerEmail)) return;

    if (!(eventStartAndEndDate?.from && eventStartAndEndDate?.to)) return;

    if (emailsToInvite.length === 0) return;

    const response = await api.post('/trips', {
      destination,
      starts_at: eventStartAndEndDate?.from,
      ends_at: eventStartAndEndDate?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    });

    const { tripId } = response.data;

    if (tripId) navigate(`/trips/${tripId}`);
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
      <div className="w-full max-w-[720px] space-y-10 bg-pattern bg-center bg-no-repeat px-6 text-center">
        <div className="flex-center flex-col gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            closeGuestsInput={closeGuestsInput}
            isGuestInputOpen={isGuestInputOpen}
            openGuestsInput={openGuestsInput}
            setDestination={setDestination}
            eventStartAndEndDate={eventStartAndEndDate}
            setEventStartAndEndDate={setEventStartAndEndDate}
          />

          {isGuestInputOpen && (
            <InvitGuestStep
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openGuestsModal={openGuestsModal}
            />
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
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  );
}

export default CreateTripPage;
