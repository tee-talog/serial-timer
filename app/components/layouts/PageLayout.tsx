import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"main">;

export const PageLayout: FC<Props> = (props) => <main {...props} />;
