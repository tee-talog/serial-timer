import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"div">;

export const Header: FC<Props> = ({ className, ...props }) => {
  const cn = clsx(className);

  return <div className={cn} {...props} />;
};
