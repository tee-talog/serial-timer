import { createFileRoute } from "@tanstack/react-router";
import { useRenTimer } from "../hooks/useTimer";
import { Actions } from "../components/Actions";
import { Header } from "../components/uis/Header";
import { AppLayout } from "../components/layouts/AppLayout";
import { PageLayout } from "../components/layouts/PageLayout";
import { HeaderLayout } from "../components/layouts/HeaderLayout";
import { Intervals } from "../components/Intervals";
import { Times } from "../components/Times";

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
    isRunning,
    isStarted,
    isFinished,
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

  // index.tsx に対して別ファイルの Layout を設定できない？
  return (
    <AppLayout>
      <HeaderLayout>
        <Header>連タイマー</Header>
      </HeaderLayout>

      <PageLayout>
        <Times
          remainTime={remainTime}
          timeSum={timeSum}
          currentRemainTime={currentRemainTime}
          currentTime={currentTimer?.time ?? null}
          index={index}
          timersLength={timers.length}
        />

        <Actions
          canStart={!isFinished && !isRunning}
          canPause={isRunning}
          canReset={isStarted}
          onStart={onStart}
          onPause={pause}
          onStop={onStop}
        />

        <Intervals
          addTimer={addTimer}
          index={index}
          timers={timers}
          canRemove={!isStarted}
          onRemove={removeTimer}
        />
      </PageLayout>
    </AppLayout>
  );
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
