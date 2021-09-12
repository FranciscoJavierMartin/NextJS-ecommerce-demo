import React from 'react';
import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '@framework/product/getAllProducts';
import { getConfig } from '@framework/api/config';
import Layout from '@components/common/Layout/Layout';

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
  return <div className='root'>{JSON.stringify(products)}</div>;
}

Home.Layout = Layout;
