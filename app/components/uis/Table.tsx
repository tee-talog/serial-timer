import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"table">;

export const Table: FC<Props> = ({ className, ...props }) => {
  const style = twMerge("mx-negative", className);

  return <table {...props} className={style} />;
};
