import { PlusIcon, Undo2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import HorizontalSeparator from '../../components/horizontal-separator';
import Activities from './activities';
import CreateActivityModal from './create-activity-modal';
import Guests from './guests';
import DestinationAndDateHeader from './header';
import ImportantLinks from './important-links';
import Button from '../../components/button';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../lib/axios';
import { IActivity, Participant, TripDetails } from '../../types/trip';

export default function TripDetailsPage() {
  const { tripId } = useParams();
  const [tripTrigger, setTripTrigger] = useState(0);
  const navigate = useNavigate();
  const [trip, setTrip] = useState<TripDetails | undefined>();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [activities, setActivities] = useState<IActivity[]>([]);

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  useEffect(() => {
    api
      .get(`/trips/${tripId}`)
      .then((response) => {
        setTrip(response.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => {
        setParticipants(response.data.participants);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .get(`/trips/${tripId}/activities`)
      .then((response) => {
        setActivities(response.data.activities);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tripId, tripTrigger]);

  if (!trip) {
    return (
      <div className="flex-center absolute inset-0 flex-col gap-5 bg-black/80">
        <h1>Invalid Trip ID</h1>
        <button
          className="flex-center h-14 gap-3 rounded-lg bg-lime-300 px-5 text-lg font-bold text-zinc-700 hover:bg-lime-400"
          onClick={() => navigate('/')}
        >
          Return to trip scheduler
          <Undo2Icon />
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <DestinationAndDateHeader trip={trip} />

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

          <Activities activities={activities} />
        </div>

        {/* right column */}
        <div className="w-80 space-y-6">
          <ImportantLinks />

          <HorizontalSeparator />

          <Guests participants={participants} />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          tripId={tripId}
          closeCreateActivityModal={closeCreateActivityModal}
          setTripTrigger={setTripTrigger}
        />
      )}
    </div>
  );
}
