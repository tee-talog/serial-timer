import type { FC } from "react";
import type { Timer, Uuid } from "../hooks/useTimer";
import { Button } from "./uis/Button";
import clsx from "clsx";
import { css } from "@emotion/css";

// セットしているタイマーのリスト
export const IntervalList: FC<{
  timers: Timer[];
  index: number | null;
  onRemove: (id: Uuid) => void;
}> = ({ timers, index, onRemove }) => {
  const listStyle = clsx(
    "w-full",
    "grid",
    "gap-x-4",
    css`
      grid-template-columns: max-content 1fr max-content;
    `,
  );

  const listRowStyle = clsx(
    "grid",
    "grid-cols-subgrid",
    "col-span-3",
    "py-3",
    "px-4",
    // 下線
    "not-last:border-b-1",
    "not-last:border-slate-300",
  );
  const styleListRowHover = clsx(
    "hover:bg-slate-100",
    "transition-colors",
    "duration-100",
  );

  const timeCellStyle = clsx("flex", "justify-end", "items-center", "pl-1");
  const actionCellStyle = clsx();

  return (
    <ol className={listStyle}>
      {timers.map((t, i) => (
        <li key={t.id} className={clsx(listRowStyle, styleListRowHover)}>
          {/* TODO 時分秒表記にする */}
          <div className={timeCellStyle}>{t.time} 秒</div>
          <div className={clsx("flex", "justify-end", "items-center")}>
            {i === index && "ｲﾏｺｺ!"}
          </div>
          <div className={actionCellStyle}>
            {/* TODO アイコンボタンにする */}
            <Button type="button" onClick={() => onRemove(t.id)}>
              remove
            </Button>
          </div>
        </li>
      ))}
    </ol>
  );
};
