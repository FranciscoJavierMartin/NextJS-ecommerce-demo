import React, { FC } from 'react';
import { Product } from '@common/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return <div>{product.name}</div>;
};

export default ProductCard;
