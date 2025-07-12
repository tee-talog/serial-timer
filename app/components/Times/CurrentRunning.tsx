import type { FC } from "react";
import { Td } from "../uis/Td";
import { Tr } from "../uis/Tr";

export const CurrentRunning: FC<{
  index: number | null;
  timersLength: number;
}> = ({ index, timersLength }) => {
  return (
    <Tr>
      <Td>{index !== null ? `${index + 1} / ${timersLength} 実行中` : "-"}</Td>
    </Tr>
  );
};
