import type { FC } from "react";
import { Table } from "./uis/Table";
import { Td } from "./uis/Td";
import { Tr } from "./uis/Tr";
import { TBody } from "./uis/TBody";

// 合計時間
export const TotalTimes: FC<{ timeSum: number; remainTime: number }> = ({
  timeSum,
  remainTime,
}) => {
  // TODO
  const formattedRemainTime = `${remainTime}`;
  // TODO
  const remainTimeDuration = formattedRemainTime;

  // 経過時間
  const elapsedTime = timeSum - remainTime;
  // TODO
  const formattedElapsedTime = `${elapsedTime}`;
  // TODO
  const elapsedTimeDuration = formattedElapsedTime;

  return (
    <Table>
      <TBody>
        <Tr>
          <Td>合計経過時間</Td>
          <Td>
            <time dateTime={elapsedTimeDuration}>{formattedElapsedTime}</time>
          </Td>
        </Tr>

        <Tr>
          <Td>合計残り時間</Td>
          <Td>
            <time dateTime={remainTimeDuration}>{formattedRemainTime}</time>
          </Td>
        </Tr>
      </TBody>
    </Table>
  );
};
