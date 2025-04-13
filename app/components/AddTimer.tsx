import { type FC, useState } from "react";

export const AddTimer: FC<{
  addTimer: (num: number) => void;
}> = ({ addTimer }) => {
  const [num, setNum] = useState(0);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTimer(num);
      }}
    >
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.currentTarget.value))}
      />
      <button type="submit">add</button>
    </form>
  );
};
