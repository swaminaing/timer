import { type ReactNode } from "react";

type CardProps = {
    title: string;
    actions: ReactNode;
    children: ReactNode;
}

const Card = ({title, actions, children}: CardProps) => {
  return (
    <section>
        <h2>{title}</h2>
        {children}
        {actions}
    </section>
  )
}

export default Card