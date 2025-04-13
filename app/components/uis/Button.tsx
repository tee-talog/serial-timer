import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"button">;

export const Button: FC<Props> = (props) => <button {...props} />;
