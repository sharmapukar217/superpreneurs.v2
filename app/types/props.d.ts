import type { VariantProps } from "tailwind-variants";
import type { buttonVariants } from "~/theme/button";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = {
  asChild?: boolean;
  as?: string | Component;

  href?: string;
  label?: string;
  block?: boolean;
  square?: boolean;
  size?: ButtonVariants["size"];
  variant?: ButtonVariants["variant"];

  id?: ButtonHTMLAttributes["id"];
  type?: ButtonHTMLAttributes["type"];
  class?: ButtonHTMLAttributes["class"];

  leadingIcon?: string;
  leadingIconClass?: string;

  trailingIcon?: string;
  trailingIconClass?: string;

  loading?: boolean;
  disabled?: boolean;
  autoLoading?: boolean;

  onClick?:
    | ((event: MouseEvent) => void | Promise<void>)
    | Array<(event: MouseEvent) => void | Promise<void>>;
};

export type SimpleFeature = {
  icon: string;
  title: string;
  description: string;
};
