import type { FC } from "react";
import { Tr } from "../uis/Tr";
import { Td } from "../uis/Td";
import clsx from "clsx";
import { Time } from "./Time";

export const ElapsedCurrent: FC<{
  currentTime: number | null;
  currentRemainTime: number | null;
}> = ({ currentTime, currentRemainTime }) => {
  const styleTimeCell = clsx("text-right");

  return (
    <Tr>
      <Td>経過</Td>
      <Td className={styleTimeCell}>
        <Time
          second={
            currentTime != null && currentRemainTime != null
              ? currentTime - currentRemainTime
              : null
          }
        />
      </Td>
    </Tr>
  );
};
