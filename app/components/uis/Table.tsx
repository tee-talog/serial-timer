import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"table">;

export const Table: FC<Props> = (props) => <table {...props} />;
