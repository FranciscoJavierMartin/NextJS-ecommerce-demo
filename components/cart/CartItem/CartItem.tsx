import React, { FC, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import Swatch from '@components/product/Swatch/Swatch';
import { LineItem } from '@common/types/cart';
import useRemoveItem from '@framework/cart/useRemoveItem';
import useUpdateItem from '@framework/cart/useUpdateItem';

import { Trash, Plus, Minus } from '@components/icons';

import styles from './CartItem.module.css';

interface CartItemProps {
  item: LineItem;
  currencyCode: string;
}

const CartItem: FC<CartItemProps> = ({ item, currencyCode }) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const removeItem = useRemoveItem();
  const updateItem = useUpdateItem();
  const price = item.variant.price! * item.quantity || 0;
  const { options } = item;

  const handleQuantityChange = (val: number) => {
    setQuantity(val);
    updateItem({
      id: item.id,
      variantId: item.variantId,
      quantity: val,
    });
  };

  const handleQuantity = async (e: ChangeEvent<HTMLInputElement>) => {
    const val = +e.target.value;
    handleQuantityChange(val);
  };

  const incrementQuantity = async (increment: number = 1) => {
    const val = quantity + increment;
    if (val >= 0) {
      handleQuantityChange(val);
    }
  };

  return (
    <li
      className={cn('flex flex-row space-x-8 py-8', {
        'opacity-75 pointer-events-none': false,
      })}
    >
      <div className='w-16 h-16 bg-violet relative overflow-hidden cursor-pointer'>
        <Image
          onClick={() => {}}
          width={150}
          height={150}
          src={item.variant.image!.url}
          unoptimized
        />
      </div>
      <div className='flex-1 flex flex-col text-base'>
        <Link href={'/'}>
          <span
            className='font-bold text-lg cursor-pointer leading-6'
            onClick={() => {}}
          >
            {item.name}
          </span>
        </Link>
        <div className='flex p-1'>
          {options &&
            options.length > 0 &&
            options.map((option) => {
              const value = option.values[0];
              return (
                <Swatch
                  key={`${item.id}-${option.displayName}`}
                  size='sm'
                  onClick={() => {}}
                  label={value.label}
                  color={value.hexColor}
                  variant={option.displayName}
                />
              );
            })}
        </div>
        <div className='flex items-center mt-3'>
          <button type='button'>
            <Minus onClick={() => incrementQuantity(-1)} />
          </button>
          <label>
            <input
              type='number'
              max={99}
              min={0}
              className={styles.quantity}
              value={quantity}
              onChange={handleQuantity}
            />
          </label>
          <button type='button'>
            <Plus onClick={() => incrementQuantity(1)} />
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-between space-y-2 text-base'>
        <span>
          {price} {currencyCode}
        </span>
        <button
          onClick={() => removeItem({ id: item.id })}
          className='flex justify-end outline-none'
        >
          <Trash />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
