import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"tr">;

export const Tr: FC<Props> = ({ className, ...props }) => {
  const style = clsx(className, "py-1");

  return <tr {...props} className={style} />;
};
