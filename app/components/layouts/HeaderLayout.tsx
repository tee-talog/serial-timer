import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"header">;

export const HeaderLayout: FC<Props> = ({ className, ...props }) => {
  const cn = clsx(className, "col-start-1", "col-end-4");

  return <header className={cn} {...props} />;
};
