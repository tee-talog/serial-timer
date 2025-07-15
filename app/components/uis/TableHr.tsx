import clsx from "clsx";
import type { ComponentProps, FC } from "react";
import { Tr } from "./Tr";
import { Td } from "./Td";
import { css } from "@emotion/css";

type Props = ComponentProps<"tr">;

export const TableHr: FC<Props> = (props) => {
  const styleTd = clsx("mx-negative", "py-2");
  const styleBorder = clsx(
    "border-t",
    "border-slate-400",
    "mx-negative",
    css`width: stretch`,
  );

  return (
    <Tr {...props}>
      <Td className={styleTd} colSpan={999}>
        <div className={styleBorder} />
      </Td>
    </Tr>
  );
};
