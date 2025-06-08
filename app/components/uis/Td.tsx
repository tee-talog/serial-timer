import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"td">;

export const Td: FC<Props> = ({ className, ...props }) => {
  const style = clsx(className, "px-[0.5em]", "first:pl-0", "last:pr-0");

  return <td {...props} className={style} />;
};
