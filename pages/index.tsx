import React from 'react';
import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '@framework/product/getAllProducts';
import { getConfig } from '@framework/api/config';
import Layout from '@components/common/Layout/Layout';
import ProductCard from '@components/product/ProductCard/ProductCard';

export async function getStaticProps() {
  const products = await getAllProducts(getConfig());
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='root'>
      {products.slice(0, 3).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

Home.Layout = Layout;
