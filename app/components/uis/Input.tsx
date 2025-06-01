import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"input">;

export const Input: FC<Props> = ({ className, ...props }) => {
  const style = clsx(
    className,
    "size-[2em]",
    "w-max",
    "px-3",
    "border-2",
    "border-slate-500",
    "rounded-[0.25em]",
  );
  const focusStyle = clsx("focus:bg-slate-100");

  return <input {...props} className={clsx(style, focusStyle)} />;
};
