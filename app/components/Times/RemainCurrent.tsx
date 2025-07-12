import type { FC } from "react";
import { Tr } from "../uis/Tr";
import { Td } from "../uis/Td";
import clsx from "clsx";
import { Time } from "./Time";

export const RemainCurrent: FC<{ currentRemainTime: number | null }> = ({
  currentRemainTime,
}) => {
  const styleTimeCell = clsx("text-right");

  return (
    <Tr>
      <Td>残り</Td>
      <Td className={styleTimeCell}>
        <Time second={currentRemainTime} />
      </Td>
    </Tr>
  );
};
