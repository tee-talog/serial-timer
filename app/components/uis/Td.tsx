import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"td">;

export const Td: FC<Props> = ({ className, ...props }) => {
  const style = twMerge(
    "px-[0.5em]",
    "first:pl-(--current-padding-x)",
    "last:pr-(--current-padding-x)",
    className,
  );

  return <td {...props} className={style} />;
};
