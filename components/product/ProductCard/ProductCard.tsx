import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@common/types/product';
import { PRODUCTS_ROUTE } from 'constants/routes';
import styles from './ProductCard.module.css';

const placeholderImage = '/product-image-placeholder.svg';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/${PRODUCTS_ROUTE}/${product.slug}`}>
      <a className={styles.root}>
        <div className={styles.productBg} />
        <div className={styles.productTag}>
          <h3 className={styles.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={styles.productPrice}>14 $</span>
        </div>
        {product.images && (
          <Image
            className={styles.productImage}
            alt={product.name}
            src={product.images[0].url ?? placeholderImage}
            height={540}
            width={540}
            quality='85'
            layout='responsive'
          />
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
