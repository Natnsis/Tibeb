import { mergeProps, useRender } from "@base-ui/react"
import { cva } from "class-variance-authority";

const textVariants = cva('',{
  variants: {
    variant: {
      title:'font-title bold text-xl',
      themed:'text-primary',
      secondary: 'text-zinc-400'
    }
  },
  defaultVariants:{
    variant:'themed'
  }
});

const Text = (props) => {
  const mergegdProps = mergeProps(props, {
    className:textVariants({
      variant:props.variant
    })
  }) 

  const element = useRender({
    defaultTagName: 'text',
    render: props.render,
    props:mergegdProps
  })
  return element;
}

export default Text
