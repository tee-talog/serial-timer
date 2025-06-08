import type { FC } from "react";
import { Button } from "./uis/Button";
import clsx from "clsx";

export const Actions: FC<{
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}> = ({ onStart, onPause, onStop }) => {
  const styleWrapper = clsx(
    "flex",
    "gap-x-8",
    "w-full",
    "py-2",
    "justify-center",
  );

  return (
    <div className={styleWrapper}>
      <Button type="button" size="big" onClick={onStart}>
        スタート
      </Button>
      <Button type="button" size="big" onClick={onPause}>
        停止
      </Button>
      <Button type="button" size="big" onClick={onStop}>
        最初から
      </Button>
    </div>
  );
};
