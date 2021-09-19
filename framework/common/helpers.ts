import {
  Product,
  Choices,
  ProductVariant,
  ProductOption,
} from '@common/types/product';

export function getVariant(product: Product, choices: Choices) {
  return product.variants.find((variant: ProductVariant) =>
    variant.options.every(
      (variantOption: ProductOption) =>
        variantOption.displayName in choices &&
        choices[variantOption.displayName] === variantOption.values[0].label
    )
  );
}
