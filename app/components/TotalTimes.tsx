import type { FC } from "react";

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
    <table>
      <tbody>
        <tr>
          <td>合計経過時間</td>
          <td>
            <time dateTime={elapsedTimeDuration}>{formattedElapsedTime}</time>
          </td>
        </tr>

        <tr>
          <td>合計残り時間</td>
          <td>
            <time dateTime={remainTimeDuration}>{formattedRemainTime}</time>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
