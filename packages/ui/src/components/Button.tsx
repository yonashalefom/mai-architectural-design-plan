// Reusable button component with variants
import { FC, ButtonHTMLAttributes } from 'react'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} />
}

