import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"button"> & {
  size?: "big";
};

export const Button: FC<Props> = ({ className, size, ...props }) => {
  const style = clsx(
    "w-max",
    "px-3",
    "py-1",
    "border-2",
    "border-slate-500",
    "rounded-[0.25em]",
  );

  const bigStyle = clsx("text-xl", "px-4", "py-2");

  const hoverStyle = clsx("hover:bg-slate-100", "cursor-pointer");
  const activeStyle = clsx("active:bg-slate-200");

  return (
    <button
      {...props}
      className={clsx(
        className,
        style,
        hoverStyle,
        activeStyle,
        size === "big" && bigStyle,
      )}
    />
  );
};
