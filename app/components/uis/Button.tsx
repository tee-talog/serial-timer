import clsx from "clsx";
import type { ComponentProps, FC } from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"button"> & {
  size?: "big";
};

export const Button: FC<Props> = ({ className, size, disabled, ...props }) => {
  const style = clsx(
    "w-max",
    "px-3",
    "py-1",
    "border-2",
    "border-slate-500",
    "rounded-[0.25em]",
    "bg-white",
  );

  const activeStyle = clsx("active:bg-slate-200");

  const variants = tv({
    base: twMerge(style, activeStyle, className),
    variants: {
      size: {
        default: "",
        big: clsx("text-xl", "px-4", "py-2"),
      },
      disabled: {
        true: clsx("bg-slate-200", "cursor-not-allowed", "text-slate-500"),
        false: clsx("hover:bg-slate-100", "cursor-pointer"),
      },
    },
    defaultVariants: {
      size: "default",
    },
  });

  return (
    <button
      {...props}
      disabled={disabled}
      className={variants({ size, disabled })}
    />
  );
};
