import clsx from "clsx";
import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"input">;

export const Input: FC<Props> = ({ className, ...props }) => {
  const styleBase = clsx(
    "w-max",
    "px-3",
    "py-1",
    "border-2",
    "border-slate-500",
    "rounded-[0.25em]",
  );
  const styleFocus = clsx("focus:bg-slate-100");
  const style = twMerge(styleBase, styleFocus, className);

  return <input {...props} className={style} />;
};
