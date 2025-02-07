import {ComponentPropsWithoutRef, ReactNode, type ElementType} from 'react'

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({as, children, ...props}: ContainerProps<C>) {
  const Container = as || 'div';

  return (
    <Container {...props}>{children}</Container>
  )
}

export default Container