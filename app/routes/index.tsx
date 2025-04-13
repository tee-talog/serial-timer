import { createFileRoute } from "@tanstack/react-router";
import { useRenTimer } from "../hooks/useTimer";
import { Actions } from "../components/Actions";
import { AddTimer } from "../components/AddTimer";
import { IndividualTimes } from "../components/IndividualTimes";
import { IntervalList } from "../components/IntervalList";
import { TotalTimes } from "../components/TotalTimes";

const RouteComponent = () => {
  const {
    start,
    addTimer,
    index,
    pause,
    remainTime,
    removeTimer,
    reset,
    timers,
    timeSum,
    currentTimer,
    currentRemainTime,
  } = useRenTimer();

  const onStart = () => {
    if (timers.length === 0) {
      return;
    }
    start();
  };

  const stop = () => {
    pause();
    reset();
  };

  return (
    <div>
      <header>連タイマー</header>

      <main>
        <TotalTimes remainTime={remainTime} timeSum={timeSum} />
        <IndividualTimes
          currentRemainTime={currentRemainTime}
          currentTime={currentTimer?.time ?? null}
        />
        <Actions onStart={onStart} onPause={pause} onStop={stop} />

        <AddTimer addTimer={addTimer} />
        <IntervalList index={index} timers={timers} onRemove={removeTimer} />
      </main>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
