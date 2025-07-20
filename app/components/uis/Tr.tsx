import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"tr">;

export const Tr: FC<Props> = ({ className, ...props }) => {
  const style = twMerge(className, "py-1");

  return <tr {...props} className={style} />;
};
