import clsx from "clsx";
import type { FC, ReactNode } from "react";

export const Card: FC<{ children: ReactNode }> = ({ children }) => {
  const style = clsx("border", "border-slate-400", "rounded", "w-full");

  return <div className={style}>{children}</div>;
};
