import { UserRoundPlusIcon, ArrowRightIcon } from 'lucide-react';
import Button from '../../../components/button';

interface InvitGuestStepProps {
  openGuestsModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export default function InvitGuestStep({
  openGuestsModal,
  emailsToInvite,
  openConfirmTripModal,
}: InvitGuestStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <button
        type="button"
        className="flex flex-1 items-center gap-2"
        onClick={openGuestsModal}
      >
        <UserRoundPlusIcon className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-lg text-zinc-100">{`${emailsToInvite.length} pessoa(s) convidada(s)`}</span>
        ) : (
          <span className="text-lg text-zinc-400">Quem estará na viagem?</span>
        )}
      </button>

      <Button onClick={openConfirmTripModal} variant="primary">
        Confirmar viagem
        <ArrowRightIcon className="size-5" />
      </Button>
    </div>
  );
}
