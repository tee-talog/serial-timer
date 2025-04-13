import type { FC } from "react";
import type { Timer, Uuid } from "../hooks/useTimer";

// セットしているタイマーのリスト
export const IntervalList: FC<{
  timers: Timer[];
  index: number | null;
  onRemove: (id: Uuid) => void;
}> = ({ timers, index, onRemove }) => {
  return (
    <div>
      <span>
        {index !== null && `${index + 1}/`}
        {timers.length}
      </span>

      <ol>
        {timers.map((t, i) => (
          <li key={t.id}>
            {t.time}
            <button type="button" onClick={() => onRemove(t.id)}>
              remove
            </button>
            {i === index && "←ｲﾏｺｺ"}
          </li>
        ))}
      </ol>
    </div>
  );
};
