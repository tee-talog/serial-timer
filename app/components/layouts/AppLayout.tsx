import type { ComponentProps, FC } from "react";
import { clsx } from "clsx";
// @emotion/react を使おうとすると css プロパティの追加がされなくてスタイルが適用されない
import { css } from "@emotion/css";

type Props = ComponentProps<"div">;

export const AppLayout: FC<Props> = ({ className, ...props }) => {
  const styleGrid = ["grid", "gap-y-[32px]", "gap-x-2"];
  const style = css`
    grid-template-rows: 60px 1fr;
    grid-template-columns: 1fr minmax(auto, 800px) 1fr;
  `;
  const _className = clsx(className, ...styleGrid, style);

  return <div {...props} className={_className} />;
};
