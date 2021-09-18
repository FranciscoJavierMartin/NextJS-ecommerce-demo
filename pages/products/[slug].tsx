import React from 'react';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Layout from '@components/common/Layout/Layout';
import { getAllProductsPaths, getProduct } from '@framework/product';
import { getConfig } from '@framework/api/config';

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await getAllProductsPaths(getConfig());
  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const { product } = await getProduct(getConfig(), { slug: params?.slug });
  return {
    props: {
      product,
    },
  };
};

export default function ProductSlug({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return <div>{product?.slug}</div>;
}

ProductSlug.Layout = Layout;
