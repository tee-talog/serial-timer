import type { FC } from "react";
import { AddTime } from "../components/AddTime";
import { IntervalList } from "../components/IntervalList";
import type { Timer, Uuid } from "../hooks/useTimer";
import { Card } from "./uis/Card";
import clsx from "clsx";

type Props = {
  addTimer: (time: number) => void;
  index: number | null;
  timers: Timer[];
  onRemove: (id: Uuid) => void;
};

export const Intervals: FC<Props> = ({ addTimer, index, timers, onRemove }) => {
  const styleSection = clsx("w-full");
  const styleHeader = clsx(
    "px-4",
    "py-3",
    "border-b",
    "border-slate-400",
    "flex",
    "justify-between",
    "items-center",
  );
  const styleTitle = clsx("text-xl");
  const styleBody = clsx("flex", "flex-col");
  const styleNoTimer = clsx("p-4");

  return (
    <section className={styleSection}>
      <Card>
        <div className={styleHeader}>
          <h2 className={styleTitle}>登録されたタイマー</h2>
          <AddTime addTimer={addTimer} />
        </div>

        {timers.length === 0 ? (
          <div className={styleNoTimer}>ありません</div>
        ) : (
          <div className={styleBody}>
            <IntervalList index={index} timers={timers} onRemove={onRemove} />
          </div>
        )}
      </Card>
    </section>
  );
};
