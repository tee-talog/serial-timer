import type { FC } from "react";
import { Tr } from "../uis/Tr";
import { Td } from "../uis/Td";
import clsx from "clsx";

export const ElapsedTotal: FC<{
  timeSum: number;
  remainTime: number;
}> = ({ timeSum, remainTime }) => {
  // 経過時間
  const elapsedTime = timeSum - remainTime;
  // TODO
  const formattedElapsedTime = `${elapsedTime}`;
  // TODO
  const elapsedTimeDuration = formattedElapsedTime;

  const styleElapsedTitle = clsx("text-xl");
  const styleElapsedTime = clsx("text-xl", "text-right");

  return (
    <Tr>
      <Td className={styleElapsedTitle}>経過</Td>
      <Td className={styleElapsedTime}>
        <time dateTime={elapsedTimeDuration}>{formattedElapsedTime}</time>秒
      </Td>
    </Tr>
  );
};
