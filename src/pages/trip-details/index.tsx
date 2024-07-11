import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import HorizontalSeparator from '../../components/horizontal-separator';
import Activities from './activities';
import CreateActivityModal from './create-activity-modal';
import Guests from './guests';
import DestinationAndDateHeader from './header';
import ImportantLinks from './important-links';
import Button from '../../components/button';

export default function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <DestinationAndDateHeader />

      {/* body */}
      <main className="flex gap-16 px-4">
        {/* left column */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Atividades</h2>

            <Button onClick={openCreateActivityModal} variant="primary">
              <PlusIcon className="size-5" />
              Cadastrar atividade
            </Button>
          </div>

          <Activities />
        </div>

        {/* right column */}
        <div className="w-80 space-y-6">
          <ImportantLinks />

          <HorizontalSeparator />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
