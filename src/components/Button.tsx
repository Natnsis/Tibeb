import { mergeProps } from '@base-ui/react';
import { useRender } from '@base-ui/react/use-render';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex justify-center items-center", {
  variants: {
    variant: {
      primary: 'bg-primary text-white cursor-pointer',
      secondary: 'bg-blue-200',
      outline: 'bg-zinc-100',
      ghost: 'hover:bg-zinc-200',
      destructive: 'bg-red-600 text-white',
      warning: 'bg-yellow-400 text-black hover:bg-yellow-500'
    },
    size: {
      sm: 'h-8 w-fit px-3 pb-1 rounded-sm text-sm',
      md: 'h-10 w-fit px-4 pb-1 rounded-md text-md',
      lg: 'h-12 w-fit px-6 pb-1 rounded-lg text-lg',
      icon: 'h-12 w-12'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
}
)


export default function Button(props) {
  const mergedProps = mergeProps(props, {
    className: buttonVariants({
      variant: props.variant,
      size: props.size
    })
  })

  const element = useRender({
    defaultTagName: 'button',
    render: props.render,
    props: mergedProps
  });

  return element;
}
