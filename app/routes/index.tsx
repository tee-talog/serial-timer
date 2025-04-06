import { createFileRoute } from "@tanstack/react-router";

const IntervalList = () => {
  return (
    <div>
      <span>1/2</span>
      <ol>
        <li>2:00</li>
        <li>3:00</li>
      </ol>
    </div>
  );
};

const TotalTimes = () => {
  return (
    <table>
      <tr>
        <td>合計経過時間</td>
        <td>
          <time dateTime="PT10M">10:00</time>
        </td>
      </tr>

      <tr>
        <td>合計残り時間</td>
        <td>
          <time dateTime="PT15M">15:00</time>
        </td>
      </tr>
    </table>
  );
};

const IndividualTimes = () => {
  return (
    <table>
      <tr>
        <td>現在のタイマーの経過時間</td>
        <td>
          <time dateTime="PT2M1S">2:01</time>
        </td>
      </tr>

      <tr>
        <td>現在のタイマーの残り時間</td>
        <td>
          <time dateTime="PT2M1S">2:01</time>
        </td>
      </tr>
    </table>
  );
};

const Actions = () => {
  return (
    <div>
      <button type="button">start</button>
      <button type="button">pause</button>
      <button type="button">stop</button>
    </div>
  );
};

const RouteComponent = () => {
  return (
    <div>
      <header>連タイマー</header>

      <main>
        <TotalTimes />
        <IndividualTimes />
        <Actions />

        <IntervalList />
      </main>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
