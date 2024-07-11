import Activity from './activity';

export default function Activities() {
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-semibold text-zinc-300">Dia 17</span>
          <span className="text-xs text-zinc-500">Sabado</span>
        </div>
        <p className="text-sm text-zinc-500">
          Nenhuma atividade cadastrada nessa data.
        </p>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-semibold text-zinc-300">Dia 18</span>
          <span className="text-xs text-zinc-500">Domingo</span>
        </div>

        {/* activity */}
        <Activity time="08:00h" title="Academia sozinho" />
        <Activity time="09:00h" title="Academia em grupo" />
      </div>
    </div>
  );
}
