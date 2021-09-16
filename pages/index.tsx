import React from 'react';
import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '@framework/product/getAllProducts';
import { getConfig } from '@framework/api/config';
import Layout from '@components/common/Layout/Layout';
import ProductCard from '@components/product/ProductCard/ProductCard';
import Grid from '@components/ui/Grid/Grid';
import Hero from '@components/ui/Hero/Hero';
import Marquee from '@components/ui/Marquee/Marquee';

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
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline='Hi there'
        description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste culpa ea, dolores saepe pariatur eligendi recusandae quos aut nulla reiciendis eius quo possimus optio voluptate a fugiat repellendus repellat qui.'
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant='slim' />
        ))}
      </Marquee>
      <Grid layout='B'>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant='secondary'>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant='slim' />
        ))}
      </Marquee>
    </>
  );
}

Home.Layout = Layout;
