import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"button">;

export const Button: FC<Props> = ({ className, ...props }) => {
  const style = clsx(
    className,
    "w-max",
    "px-3",
    "py-1",
    "border-2",
    "border-slate-500",
    "rounded-[0.25em]",
  );

  const hoverStyle = clsx("hover:bg-slate-100");
  const activeStyle = clsx("active:bg-slate-200");

  return <button {...props} className={clsx(style, hoverStyle, activeStyle)} />;
};
