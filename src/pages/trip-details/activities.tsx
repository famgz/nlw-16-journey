import { Fragment } from 'react/jsx-runtime';
import { IActivity } from '../../types/trip';
import Activity from './activity';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ActivitiesProps {
  activities: IActivity[];
}

export default function Activities({ activities }: ActivitiesProps) {
  if (activities.length === 0) return <p>No activities</p>;

  return (
    <div className="space-y-8">
      {activities.map((activity, i) => {
        return (
          <Fragment key={i}>
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia {format(activity.date, 'd')}
                </span>
                <span className="text-xs text-zinc-500">
                  {format(activity.date, 'EEEE', { locale: ptBR })}
                </span>
              </div>
              {activity.activities.length > 0 ? (
                activity.activities.map((a) => (
                  <Activity
                    time={format(a.occurs_at, "HH:mm'h'")}
                    title={a.title}
                    key={a.id}
                  />
                ))
              ) : (
                <p className="text-sm text-zinc-500">
                  Nenhuma atividade cadastrada nessa data.
                </p>
              )}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
