import type { FC } from "react";
import { Table } from "./uis/Table";
import { Td } from "./uis/Td";
import { Tr } from "./uis/Tr";
import { TBody } from "./uis/TBody";
import clsx from "clsx";
import { Card } from "./uis/Card";

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

  const styleSection = clsx("w-full");

  const styleTitle = clsx(
    "text-2xl",
    "font-bold",
    "p-4",
    "py-2",
    "border-b",
    "border-slate-400",
  );

  const styleTable = clsx("p-4", "pt-2");

  const styleRemainTitle = clsx("text-4xl", "leading-[1.6]");
  const styleRemainTime = clsx("text-4xl", "text-right");

  const styleElapsedTitle = clsx("text-xl");
  const styleElapsedTime = clsx("text-xl", "text-right");

  return (
    <section className={styleSection}>
      <Card>
        <h2 className={styleTitle}>合計</h2>

        <div className={styleTable}>
          <Table>
            <TBody>
              <Tr>
                <Td className={styleRemainTitle}>残り時間</Td>
                <Td className={styleRemainTime}>
                  <time dateTime={remainTimeDuration}>
                    {formattedRemainTime}
                  </time>
                  秒
                </Td>
              </Tr>

              <Tr>
                <Td className={styleElapsedTitle}>経過時間</Td>
                <Td className={styleElapsedTime}>
                  <time dateTime={elapsedTimeDuration}>
                    {formattedElapsedTime}
                  </time>
                  秒
                </Td>
              </Tr>
            </TBody>
          </Table>
        </div>
      </Card>
    </section>
  );
};
