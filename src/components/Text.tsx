import * as React from 'react';
import { mergeProps } from '@base-ui/react';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
  [
    'relative inline-flex items-center justify-center gap-2',
    'font-medium whitespace-nowrap select-none',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary',
        secondary:
          'bg-blue-200 text-blue-900 hover:bg-blue-300 focus-visible:ring-blue-400',
        outline:
          'border border-zinc-300 bg-white hover:bg-zinc-50 focus-visible:ring-zinc-400',
        ghost:
          'bg-transparent hover:bg-zinc-100 focus-visible:ring-zinc-400',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
        warning:
          'bg-yellow-400 text-black hover:bg-yellow-500 focus-visible:ring-yellow-500',
      },
      size: {
        sm: 'h-8 px-3 text-sm rounded-md',
        md: 'h-10 px-4 text-sm rounded-lg',
        lg: 'h-12 px-6 text-base rounded-xl',
        icon: 'h-10 w-10 p-0 rounded-lg',
      },
      loading: {
        true: 'cursor-wait',
      },
      skeleton: {
        visible:
          'bg-zinc-200 text-transparent animate-pulse pointer-events-none',
        hidden: 'invisible pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

/* -------------------------------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------------------------------*/

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  render?: any;
  loading?: boolean;
  skeleton?: 'visible' | 'hidden';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/* -------------------------------------------------------------------------------------------------
 * Component
 * ------------------------------------------------------------------------------------------------*/

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function Button(
  {
    variant,
    size,
    loading = false,
    skeleton,
    disabled,
    className,
    children,
    leftIcon,
    rightIcon,
    type,
    ...props
  },
  ref
) {
  const isSkeletonVisible = skeleton === 'visible';
  const isSkeletonHidden = skeleton === 'hidden';

  const isDisabled =
    disabled || loading || isSkeletonVisible || isSkeletonHidden;

  const mergedProps = mergeProps(props, {
    ref,
    type: type ?? 'button',
    disabled: isDisabled,
    'aria-disabled': isDisabled || undefined,
    'aria-busy': loading || undefined,
    className: clsx(
      buttonVariants({
        variant,
        size,
        loading,
        skeleton,
      }),
      className
    ),
  });

  const element = useRender({
    defaultTagName: 'button',
    render: props.render,
    props: mergedProps,
  });

  return React.cloneElement(
    element,
    {},
    <>
      {/* Skeleton Visible */}
      {isSkeletonVisible ? (
        <span className="invisible">{children}</span>
      ) : (
        <>
          {/* Loading Spinner */}
          {loading && !isSkeletonHidden && (
            <Spinner className="absolute h-4 w-4 animate-spin" />
          )}

          <span
            className={clsx(
              'inline-flex items-center gap-2',
              loading && 'opacity-0'
            )}
          >
            {leftIcon}
            {children}
            {rightIcon}
          </span>
        </>
      )}
    </>
  );
});

/* -------------------------------------------------------------------------------------------------
 * Spinner
 * ------------------------------------------------------------------------------------------------*/

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={clsx('h-4 w-4 animate-spin', className)}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}