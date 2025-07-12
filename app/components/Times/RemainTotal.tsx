import type { FC } from "react";
import { Tr } from "../uis/Tr";
import { Td } from "../uis/Td";
import clsx from "clsx";

export const RemainTotal: FC<{
  remainTime: number;
}> = ({ remainTime }) => {
  // TODO
  const formattedRemainTime = `${remainTime}`;
  // TODO
  const remainTimeDuration = formattedRemainTime;

  const styleRemainTitle = clsx("text-4xl");
  const styleRemainTime = clsx("text-4xl", "text-right");

  return (
    <Tr>
      <Td className={styleRemainTitle}>残り</Td>
      <Td className={styleRemainTime}>
        <time dateTime={remainTimeDuration}>{formattedRemainTime}</time>秒
      </Td>
    </Tr>
  );
};
