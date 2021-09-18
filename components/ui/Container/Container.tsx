import React, { FC, ComponentType, HTMLAttributes } from 'react';

interface ContainerProps {
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
  additionalClasses?: string;
}

const Container: FC<ContainerProps> = ({
  children,
  el: Component = 'div',
  additionalClasses = '',
}) => {
  return (
    <Component className={`px-6 mx-auto max-w-8xl ${additionalClasses}`}>
      {children}
    </Component>
  );
};

export default Container;
