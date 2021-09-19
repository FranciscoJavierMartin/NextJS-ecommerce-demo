import React, { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import Container from '@components/ui/Container/Container';
import Button from '@components/ui/Button/Button';
import { Product } from '@common/types/product';

import styles from './ProductView.module.css';
import ProductSlider from '../ProductSlider/ProductSlider';

interface ProductViewProps {
  product: Product;
}

const ProductView: FC<ProductViewProps> = ({ product }) => {
  return (
    <Container>
      <div className={cn(styles.root, 'fit', 'mb-5')}>
        <div className={cn(styles.productDisplay, 'fit')}>
          <div className={styles.nameBox}>
            <h1 className={styles.name}>{product.name}</h1>
            <div
              className={styles.price}
            >{`${product.price.value} ${product.price.currencyCode}`}</div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url} className={styles.imageContainer}>
                <Image
                  className={styles.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality='85'
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={styles.sidebar}>
          <section>
            {product.options.map((option) => (
              <div className='pb-4' key={option.id}>
                <h2 className='uppercase font-medium'>{option.displayName}</h2>
                <div className='flex flex-row py-4'>
                  {option.values.map((ov) => (
                    <div key={`${option.id}-${ov.label}`}>{ov.label}</div>
                  ))}
                </div>
              </div>
            ))}
            <div className='pb-14 break-words w-full max-w-xl text-lg'>
              {product.description}
            </div>
          </section>
          <div>
            <Button className={styles.button} onClick={() => {}}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
