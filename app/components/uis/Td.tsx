import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"td">;

export const Td: FC<Props> = ({ className, ...props }) => {
  const style = clsx(className, "px-2", "first:pl-0", "last:pr-0");

  return <td {...props} className={style} />;
};
