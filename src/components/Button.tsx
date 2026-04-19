import { mergeProps } from '@base-ui/react';
import { useRender } from '@base-ui/react/use-render';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex justify-center items-center", {
  variants: {
    variant: {
      primary: '',
      secondary: '',
      destructive: '',
      warning: ''
    },
    size: {
      default: 'h-12 w-fit',
      icon: 'h-12 w-12'
    }
  },
    defaultVariants:{
      variant:'primary',
      size:'default'
    }
}
)


export default function Button(props) {

  const mergedProps = mergeProps(props,{
    className:buttonVariants
  })

  const element = useRender({
    defaultTagName: 'button',
    render: props.render,
    props:mergedProps
  });

  return element;
}
