import React, { FC, Children, isValidElement } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import styles from './ProductSlider.module.css';

const ProductSlider: FC = ({ children }) => {
  const [sliderRef, _] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(s) {},
  });

  return (
    <div className={styles.root}>
      <div ref={sliderRef} className='keen-slider h-full transition-opacity'>
        {Children.map(children, (child) =>
          isValidElement(child)
            ? {
                ...child,
                props: {
                  ...child.props,
                  className: `${
                    child.props.className ? `${child.props.className}` : ''
                  } keen-slider__slide`,
                },
              }
            : child
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
