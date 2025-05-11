import type { ComponentProps, FC } from "react";
import { clsx } from "clsx";

type Props = ComponentProps<"div">;

export const AppLayout: FC<Props> = ({ className, ...props }) => {
  const styleGrid = [
    "grid",
    "grid-rows-[60px_1fr]",
    // https://coliss.com/articles/build-websites/operation/css/how-to-use-css-minmax.html
    "grid-cols-[minmax(1rem,1fr)_minmax(auto,800px)_minmax(1rem,1fr)]",
  ];

  const cn = clsx(className, ...styleGrid);

  return <div className={cn} {...props} />;
};
