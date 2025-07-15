import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"td">;

export const Td: FC<Props> = ({ className, ...props }) => {
  const style = clsx(
    className,
    "px-[0.5em]",
    "first:pl-(--current-padding-x)",
    "last:pr-(--current-padding-x)",
  );

  return <td {...props} className={style} />;
};
