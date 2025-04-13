import type { FC } from "react";

export const Actions: FC<{
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
