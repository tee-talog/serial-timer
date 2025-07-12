import type { FC } from "react";

export const Time: FC<{ second?: number | null }> = ({ second }) => {
  if (second === undefined || second === null) {
    return <>-</>;
  }

  // TODO
  const formatted = `${second}秒`;
  // TODO
  const duration = `${second}`;

  return <time dateTime={duration}>{formatted}</time>;
};
