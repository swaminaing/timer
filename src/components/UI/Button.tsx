import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string;
};

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props
}

const Button = (props: ButtonProps | AnchorProps) => {
    if(isAnchorProps(props)){
        return(
            <a {...props}></a>
        )
    }
  return (
    <button className="button" {...props}></button>
  )
}

export default Button