import type { FC } from "react";
import { Table } from "./uis/Table";
import { TBody } from "./uis/TBody";
import { Td } from "./uis/Td";
import { Tr } from "./uis/Tr";

export const IndividualTimes: FC<{
  currentTime: number | null;
  currentRemainTime: number | null;
}> = ({ currentTime, currentRemainTime }) => {
  if (currentTime === null || currentRemainTime === null) {
    return (
      <Table>
        <TBody>
          <Tr>
            <Td>現在のタイマーの経過時間</Td>
            <Td>-</Td>
          </Tr>

          <Tr>
            <Td>現在のタイマーの残り時間</Td>
            <Td>-</Td>
          </Tr>
        </TBody>
      </Table>
    );
  }

  // TODO
  const formattedCurrentRemainTime = `${currentRemainTime}`;
  // TODO
  const currentRemainTimeDuration = formattedCurrentRemainTime;

  // 現在のタイマーの経過時間
  const currentElapsedTime = currentTime - currentRemainTime;
  // TODO
  const formattedCurrentElapsedTime = `${currentElapsedTime}`;
  // TODO
  const currentElapsedTimeDuration = formattedCurrentElapsedTime;

  return (
    <Table>
      <TBody>
        <Tr>
          <Td>現在のタイマーの経過時間</Td>
          <Td>
            <time dateTime={currentElapsedTimeDuration}>
              {formattedCurrentElapsedTime}
            </time>
          </Td>
        </Tr>

        <Tr>
          <Td>現在のタイマーの残り時間</Td>
          <Td>
            <time dateTime={currentRemainTimeDuration}>
              {formattedCurrentRemainTime}
            </time>
          </Td>
        </Tr>
      </TBody>
    </Table>
  );
};
