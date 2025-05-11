import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"div">;

export const AppLayout: FC<Props> = (props) => <div {...props} />;
