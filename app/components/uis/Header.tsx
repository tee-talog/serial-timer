import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"header">;

export const Header: FC<Props> = (props) => <header {...props} />;
