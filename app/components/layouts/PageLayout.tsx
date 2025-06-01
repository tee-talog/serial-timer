import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"main">;

export const PageLayout: FC<Props> = ({ className, ...props }) => {
  const cn = clsx(
    className,
    "row-2",
    "col-2",
    "flex",
    "flex-col",
    "items-start",
    "gap-y-4",
  );

  return <main className={cn} {...props} />;
};
