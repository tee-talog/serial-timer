import { createFileRoute } from "@tanstack/react-router";
import { useRenTimer } from "../hooks/useTimer";
import { Actions } from "../components/Actions";
import { AddTime } from "../components/AddTime";
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

  const onStop = () => {
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
        <Actions onStart={onStart} onPause={pause} onStop={onStop} />

        <AddTime addTimer={addTimer} />
        <IntervalList index={index} timers={timers} onRemove={removeTimer} />
      </main>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
