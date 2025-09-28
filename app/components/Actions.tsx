import type { FC } from "react";
import { Button } from "./uis/Button";
import clsx from "clsx";

export const Actions: FC<{
  canStart: boolean;
  canPause: boolean;
  canReset: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}> = ({ canStart, canPause, canReset, onStart, onPause, onStop }) => {
  const styleWrapper = clsx(
    "flex",
    "gap-x-8",
    "w-full",
    "py-2",
    "justify-center",
  );

  return (
    <div className={styleWrapper}>
      <Button type="button" size="big" disabled={!canStart} onClick={onStart}>
        スタート
      </Button>
      <Button type="button" size="big" disabled={!canPause} onClick={onPause}>
        一時停止
      </Button>
      <Button type="button" size="big" disabled={!canReset} onClick={onStop}>
        リセット
      </Button>
    </div>
  );
};
