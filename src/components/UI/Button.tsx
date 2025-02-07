import { type ReactNode, type ComponentPropsWithoutRef } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

function isAnchorProps(props: AnchorProps | ButtonProps): props is AnchorProps {
  return "href" in props;
}

function Button(props: AnchorProps | ButtonProps) {
  //   const { el, ...otherProps } = props;

  if (isAnchorProps(props)) {
    return <a className="button" {...props}>{props.children}</a>;
  }
  return <button className="button" {...props}>{props.children}</button>;
}

export default Button;
