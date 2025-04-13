import type { FC } from "react";

export const IndividualTimes: FC<{
  currentTime: number | null;
  currentRemainTime: number | null;
}> = ({ currentTime, currentRemainTime }) => {
  if (currentTime === null || currentRemainTime === null) {
    return (
      <table>
        <tbody>
          <tr>
            <td>現在のタイマーの経過時間</td>
            <td>-</td>
          </tr>

          <tr>
            <td>現在のタイマーの残り時間</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
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
    <table>
      <tbody>
        <tr>
          <td>現在のタイマーの経過時間</td>
          <td>
            <time dateTime={currentElapsedTimeDuration}>
              {formattedCurrentElapsedTime}
            </time>
          </td>
        </tr>

        <tr>
          <td>現在のタイマーの残り時間</td>
          <td>
            <time dateTime={currentRemainTimeDuration}>
              {formattedCurrentRemainTime}
            </time>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
