import React from 'react';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Layout from '@components/common/Layout/Layout';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'cool-hat' } },
      { params: { slug: 't-shirt' } },
      { params: { slug: 'lightweight-jacket' } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  return {
    props: {
      product: {
        slug: params?.slug,
      },
    },
  };
};

export default function ProductSlug({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return <div>{product.slug}</div>;
}

ProductSlug.Layout = Layout;
