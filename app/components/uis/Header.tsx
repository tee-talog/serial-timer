import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"div">;

export const Header: FC<Props> = ({ className, ...props }) => {
  const cn = clsx(
    className,
    "text-3xl",
    "h-full",
    "flex",
    "items-center",
    "px-4",
    "shadow-[0_3px_3px_0_rgba(0,0,0,0.12)]",
  );

  return <div className={cn} {...props} />;
};
