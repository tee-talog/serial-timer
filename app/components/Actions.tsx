import type { FC } from "react";
import { Button } from "./uis/Button";

export const Actions: FC<{
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}> = ({ onStart, onPause, onStop }) => {
  return (
    <div>
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
