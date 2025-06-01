import { type FC, useState } from "react";
import { Button } from "./uis/Button";
import { Input } from "./uis/Input";
import clsx from "clsx";

export const AddTime: FC<{
  addTimer: (num: number) => void;
}> = ({ addTimer }) => {
  const formStyle = clsx("flex", "gap-x-2");

  const [num, setNum] = useState(0);

  return (
    <form
      className={formStyle}
      onSubmit={(e) => {
        e.preventDefault();
        addTimer(num);
      }}
    >
      <Input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.currentTarget.value))}
      />
      <Button type="submit">add</Button>
    </form>
  );
};
