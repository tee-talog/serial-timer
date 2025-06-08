import type { FC } from "react";
import { Table } from "./uis/Table";
import { TBody } from "./uis/TBody";
import { Td } from "./uis/Td";
import { Tr } from "./uis/Tr";

const Time: FC<{ second?: number | null }> = ({ second }) => {
  if (second === undefined || second === null) {
    return <>-</>;
  }

  // TODO
  const formatted = `${second}`;
  // TODO
  const duration = formatted;

  return <time dateTime={duration}>{formatted}</time>;
};

export const IndividualTimes: FC<{
  currentTime: number | null;
  currentRemainTime: number | null;
}> = ({ currentTime, currentRemainTime }) => (
  <Table>
    <TBody>
      <Tr>
        <Td>現在のタイマーの経過時間</Td>
        <Td>
          <Time
            second={
              currentTime != null && currentRemainTime != null
                ? currentTime - currentRemainTime
                : null
            }
          />
        </Td>
      </Tr>

      <Tr>
        <Td>現在のタイマーの残り時間</Td>
        <Td>
          <Time second={currentRemainTime} />
        </Td>
      </Tr>
    </TBody>
  </Table>
);
