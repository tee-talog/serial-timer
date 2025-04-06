import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Uuid = `${string}-${string}-${string}-${string}-${string}`;

export type Timer = {
  time: number;
  id: Uuid;
};

export const useRenTimer = () => {
  // セットされたタイマーリスト
  const [timers, setTimers] = useState<Timer[]>([]);

  // タイマーに追加
  const addTimer = useCallback((time: number) => {
    setTimers((timers) => [
      ...timers,
      { time, id: window.crypto.randomUUID() },
    ]);
  }, []);

  // タイマーから削除
  const removeTimer = useCallback((id: Uuid) => {
    setTimers((timers) => timers.filter((timer) => timer.id !== id));
  }, []);

  // タイマー全体の時間
  const timeSum = timers.reduce((acc, current) => acc + current.time, 0);

  // タイマー本体
  const timerRef = useRef<number | undefined>(undefined);

  // 最初のタイマーが始まってからの時間
  const [time, setTime] = useState(0);

  // タイマースタート
  const start = useCallback(() => {
    if (isStarted) {
      return;
    }

    timerRef.current = window.setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  }, []);

  // タイマーを止める
  const pause = useCallback(() => {
    window.clearInterval(timerRef.current);
    timerRef.current = undefined;
  }, []);

  // タイマーを完全にリセットする
  const reset = useCallback(() => {
    window.clearInterval(timerRef.current);
    timerRef.current = undefined;
    setTime(0);
  }, []);

  // 開始しているか
  const isStarted = timerRef.current !== undefined;

  // 残りの時間
  const remainTime = timeSum - time;

  // 一度スタートして終わっているか
  // isFinished === true なら isStarted === false
  const isFinished = remainTime <= 0;

  // 終わったらタイマーを止める
  useEffect(() => {
    if (isFinished) {
      pause();
    }
  }, [isFinished, pause]);

  // 今どのタイマーが実行されているか
  const index = useMemo(() => {
    if (!isStarted || isFinished) {
      return null;
    }

    let sum = 0;
    for (let i = 0; i < timers.length; i++) {
      const current = timers[i];
      sum += current.time;
      if (sum > time) {
        return i;
      }
    }
    // 来ることはないはず
    return null;
  }, [isStarted, isFinished, timers, time]);

  // 今実行しているタイマー
  const currentTimer = useMemo(() => {
    if (!isStarted || isFinished || index === null) {
      return null;
    }
    return timers[index];
  }, [isStarted, isFinished, index, timers]);

  // 今のタイマーがどれくらい残っているか
  const currentRemainTime = useMemo(() => {
    if (!isStarted || isFinished || !currentTimer) {
      return null;
    }

    // これより前のタイマーの時間を合算
    let sum = 0;
    for (let i = 0; i < timers.length; i++) {
      const t = timers[i];
      if (t.id === currentTimer.id) {
        return sum;
      }
      sum += t.time;
    }
    // 来ることはない
    return null;
  }, [isStarted, isFinished, currentTimer, timers]);

  return {
    addTimer,
    removeTimer,
    start,
    pause,
    reset,
    isStarted,
    isFinished,
    index,
    timers,
    remainTime,
    timeSum,
    currentTimer,
    currentRemainTime,
  };
};
