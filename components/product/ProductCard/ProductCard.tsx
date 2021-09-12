import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@common/types/product';
import { PRODUCTS_ROUTE } from 'constants/routes';

const placeholderImage = '/product-image-placeholder.svg';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/${PRODUCTS_ROUTE}/${product.slug}`}>
      <a>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>14 $</span>
        </div>
        {product.images && (
          <Image
            alt={product.name}
            src={placeholderImage}
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
