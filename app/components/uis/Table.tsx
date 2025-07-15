import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"table">;

export const Table: FC<Props> = ({ className, ...props }) => {
  const style = clsx(className, "mx-negative");

  return <table {...props} className={style} />;
};
