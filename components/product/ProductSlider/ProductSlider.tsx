import React, { FC, Children, isValidElement, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import cn from 'classnames';

import styles from './ProductSlider.module.css';

const ProductSlider: FC = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <div className={styles.root}>
      <div ref={sliderRef} className='keen-slider h-full transition-opacity'>
        <button
          onClick={slider?.prev}
          className={cn(styles.leftControl, styles.control)}
        />
        <button
          onClick={slider?.next}
          className={cn(styles.rightControl, styles.control)}
        />
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
