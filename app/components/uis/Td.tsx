import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"td">;

export const Td: FC<Props> = (props) => <td {...props} />;
