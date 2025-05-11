import type { ComponentProps, FC } from "react";
import { clsx } from "clsx";

type Props = ComponentProps<"div">;

export const AppLayout: FC<Props> = ({ className, ...props }) => {
  const styleGrid = [
    "grid",
    "grid-rows-[60px_1fr]",
    "gap-y-4",
    "grid-cols-[1fr_minmax(auto,800px)_1fr]",
    "gap-x-2",
  ];

  const cn = clsx(className, ...styleGrid);

  return <div className={cn} {...props} />;
};
