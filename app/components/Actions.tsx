import type { FC } from "react";
import { Button } from "./uis/Button";
import clsx from "clsx";

export const Actions: FC<{
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}> = ({ onStart, onPause, onStop }) => {
  const divStyle = clsx("flex", "gap-x-4");

  return (
    <div className={divStyle}>
      <Button type="button" onClick={onStart}>
        start
      </Button>
      <Button type="button" onClick={onPause}>
        pause
      </Button>
      <Button type="button" onClick={onStop}>
        stop
      </Button>
    </div>
  );
};
