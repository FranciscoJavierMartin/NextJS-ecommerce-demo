import { CurrencyCode } from '@framework/schema';

export type AvailableChoices = 'Size' | 'Color' | string;

export type Choices = {
  [P in AvailableChoices]: string;
};

export interface ProductImage {
  url: string;
  alt?: string;
}

export interface ProductPrice {
  value: number;
  currencyCode: CurrencyCode;
}

export interface ProductOptionValues {
  label: string;
  hexColor?: string;
}

export interface ProductOption {
  id: string;
  displayName: string;
  values: ProductOptionValues[];
}

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  image?: ProductImage;
  requiresShipping: boolean;
  price: number;
  listPrice: number;
  options: ProductOption[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: ProductImage[];
  price: ProductPrice;
  options: ProductOption[];
  variants: ProductVariant[];
}
