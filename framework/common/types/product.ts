import { CurrencyCode } from '@framework/schema';

export interface ProductImage {
  url: string;
  alt?: string;
}

export interface ProductPrice {
  value: number;
  currencyCode: CurrencyCode;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: ProductImage[];
  price: ProductPrice;
}
