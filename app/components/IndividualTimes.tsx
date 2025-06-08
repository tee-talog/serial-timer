import type { FC } from "react";
import { Table } from "./uis/Table";
import { TBody } from "./uis/TBody";
import { Td } from "./uis/Td";
import { Tr } from "./uis/Tr";
import { Card } from "./uis/Card";
import clsx from "clsx";

const Time: FC<{ second?: number | null }> = ({ second }) => {
  if (second === undefined || second === null) {
    return <>-</>;
  }

  // TODO
  const formatted = `${second}秒`;
  // TODO
  const duration = `${second}`;

  return <time dateTime={duration}>{formatted}</time>;
};

export const IndividualTimes: FC<{
  currentTime: number | null;
  currentRemainTime: number | null;
  index: number | null;
  timersLength: number;
}> = ({ currentTime, currentRemainTime, index, timersLength }) => {
  const styleSection = clsx("w-full");
  const styleHeader = clsx(
    "p-4",
    "py-2",
    "border-b",
    "border-slate-400",
    "flex",
    "justify-between",
    "items-center",
  );
  const styleTitle = clsx("text-xl");
  const styleTable = clsx("p-4");
  const styleTimeCell = clsx("text-right");

  return (
    <section className={styleSection}>
      <Card>
        <div className={styleHeader}>
          <h2 className={styleTitle}>現在</h2>
          {index !== null && `${index + 1}個目 / ${timersLength}個中`}
        </div>

        <div className={styleTable}>
          <Table>
            <TBody>
              <Tr>
                <Td>残り時間</Td>
                <Td className={styleTimeCell}>
                  <Time second={currentRemainTime} />
                </Td>
              </Tr>

              <Tr>
                <Td>経過時間</Td>
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
            </TBody>
          </Table>
        </div>
      </Card>
    </section>
  );
};
