import { createFileRoute } from "@tanstack/react-router";
import { type Timer, useRenTimer } from "../hooks/useTimer";
import type { FC } from "react";

// セットしているタイマーのリスト
const IntervalList: FC<{ timers: Timer[]; index: number | null }> = ({
  timers,
  index,
}) => {
  if (index === null) {
    return null;
  }

  return (
    <div>
      <span>
        {index + 1}/{timers.length}
      </span>

      <ol>
        {timers.map((t, i) => (
          <li key={t.id}>
            {t.time}
            {i === index && "←ｲﾏｺｺ"}
          </li>
        ))}
      </ol>
    </div>
  );
};

// 合計時間
const TotalTimes: FC<{ timeSum: number; remainTime: number }> = ({
  timeSum,
  remainTime,
}) => {
  // TODO
  const formattedRemainTime = `${remainTime}`;
  // TODO
  const remainTimeDuration = formattedRemainTime;

  // 経過時間
  const elapsedTime = timeSum - remainTime;
  // TODO
  const formattedElapsedTime = `${elapsedTime}`;
  // TODO
  const elapsedTimeDuration = formattedElapsedTime;

  return (
    <table>
      <tbody>
        <tr>
          <td>合計経過時間</td>
          <td>
            <time dateTime={elapsedTimeDuration}>{formattedElapsedTime}</time>
          </td>
        </tr>

        <tr>
          <td>合計残り時間</td>
          <td>
            <time dateTime={remainTimeDuration}>{formattedRemainTime}</time>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const IndividualTimes: FC<{
  currentTime: number | null;
  currentRemainTime: number | null;
}> = ({ currentTime, currentRemainTime }) => {
  if (currentTime === null || currentRemainTime === null) {
    return null;
  }

  // TODO
  const formattedCurrentRemainTime = `${currentRemainTime}`;
  // TODO
  const currentRemainTimeDuration = formattedCurrentRemainTime;

  // 現在のタイマーの経過時間
  const currentElapsedTime = currentTime - currentRemainTime;
  // TODO
  const formattedCurrentElapsedTime = `${currentElapsedTime}`;
  // TODO
  const currentElapsedTimeDuration = formattedCurrentElapsedTime;

  return (
    <table>
      <tbody>
        <tr>
          <td>現在のタイマーの経過時間</td>
          <td>
            <time dateTime={currentElapsedTimeDuration}>
              {formattedCurrentElapsedTime}
            </time>
          </td>
        </tr>

        <tr>
          <td>現在のタイマーの残り時間</td>
          <td>
            <time dateTime={currentRemainTimeDuration}>
              {formattedCurrentRemainTime}
            </time>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Actions: FC<{
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}> = ({ onStart, onPause, onStop }) => {
  return (
    <div>
      <button type="button" onClick={onStart}>
        start
      </button>
      <button type="button" onClick={onPause}>
        pause
      </button>
      <button type="button" onClick={onStop}>
        stop
      </button>
    </div>
  );
};

const RouteComponent = () => {
  const {
    start,
    addTimer,
    index,
    isFinished,
    isStarted,
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

        <IntervalList index={index} timers={timers} />
      </main>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
