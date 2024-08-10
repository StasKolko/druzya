'use client';

import {
  cloneElement, isValidElement, MouseEventHandler, ReactNode,
} from 'react';
import { cn } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export type ButtonTypes = 'button' | 'reset' | 'submit';
export type ButtonOptions = 'btn' | 'link' | 'icon';
export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'successful';
export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonProps = {
  asChild?: boolean;
  option: ButtonOptions;
  type?: ButtonTypes;
  variant: ButtonVariants;
  size: ButtonSizes;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

export function Button({
  asChild,
  option,
  type = 'button',
  variant,
  size,
  className = '',
  children,
  onClick,
}: ButtonProps) {
  const buttonProps = {
    className: cn(cls[option], cls[variant], cls[size], className),
    onClick,
  };

  if (asChild && isValidElement(children)) {
    return cloneElement(children, buttonProps);
  }

  return (
    <button type={type} {...buttonProps}>
      {children}
    </button>
  );
}
