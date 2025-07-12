import clsx from "clsx";
import type { FC } from "react";
import { Card } from "../uis/Card";
import { Table } from "../uis/Table";
import { TBody } from "../uis/TBody";
import { Td } from "../uis/Td";
import { Tr } from "../uis/Tr";
import { RemainTotal } from "./RemainTotal";
import { ElapsedTotal } from "./ElapsedTotal";
import { ElapsedCurrent } from "./ElapsedCurrent";
import { RemainCurrent } from "./RemainCurrent";
import { CurrentRunning } from "./CurrentRunning";

export const Times: FC<{
  timeSum: number;
  remainTime: number;
  currentTime: number | null;
  currentRemainTime: number | null;
  index: number | null;
  timersLength: number;
}> = ({
  timeSum,
  remainTime,
  currentTime,
  currentRemainTime,
  index,
  timersLength,
}) => {
  const styleSection = clsx("w-full");
  const styleTitle = clsx(
    "text-2xl",
    "p-4",
    "py-2",
    "border-b",
    "border-slate-400",
  );
  const styleTable = clsx("p-4");
  const styleSpacer = clsx("py-2");

  return (
    <section className={styleSection}>
      <Card>
        <h2 className={styleTitle}>時間</h2>

        <div className={styleTable}>
          <Table>
            <TBody>
              <RemainTotal remainTime={remainTime} />
              <ElapsedTotal timeSum={timeSum} remainTime={remainTime} />

              <Tr>
                {/* TODO Hr */}
                <Td className={styleSpacer} />
              </Tr>

              <CurrentRunning index={index} timersLength={timersLength} />
              <RemainCurrent currentRemainTime={currentRemainTime} />
              <ElapsedCurrent
                currentTime={currentTime}
                currentRemainTime={currentRemainTime}
              />
            </TBody>
          </Table>
        </div>
      </Card>
    </section>
  );
};
