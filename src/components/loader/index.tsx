import { HTMLAttributes } from "react";
import { Spinner } from "./styles";

interface LoaderProps extends HTMLAttributes<ElementCSSInlineStyle> {}

export function Loader({ ...props }: LoaderProps) {
  return <Spinner {...props} className="spin"></Spinner>;
}
