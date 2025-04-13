import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"input">;

export const Input: FC<Props> = (props) => <input {...props} />;
