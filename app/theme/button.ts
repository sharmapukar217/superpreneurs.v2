import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  slots: {
    base: [
      "group font-medium inline-flex items-center transition-colors cursor-pointer",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75"
    ],
    label: "truncate",
    leadingIcon: "shrink-0",
    leadingAvatar: "shrink-0",
    leadingAvatarSize: "",
    trailingIcon: "shrink-0"
  },
  variants: {
    variant: {
      inverted:
        "bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-foreground",
      primary:
        "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary",
      success:
        "bg-success text-success-foreground hover:bg-success/90 focus-visible:ring-success",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-primary",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
      ghost: "hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent",
      link: "text-primary underline-offset-4 hover:underline focus-visible:ring-primary"
    },
    size: {
      xs: {
        base: "h-7 px-3 text-xs gap-1 rounded-sm",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
        trailingIcon: "size-4"
      },
      sm: {
        base: "h-9 px-3 text-sm gap-1.5 rounded-sm",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
        trailingIcon: "size-4"
      },
      md: {
        base: "h-10 px-4 text-base gap-1.5 rounded-md",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
        trailingIcon: "size-5"
      },
      lg: {
        base: "px-6 h-11 text-base gap-2 rounded-lg",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
        trailingIcon: "size-5"
      },
      xl: {
        base: "px-8 h-12 text-base gap-2 rounded-lg",
        leadingIcon: "size-5",
        leadingAvatarSize: "xs",
        trailingIcon: "size-5"
      }
    },
    square: {
      true: ""
    },
    loading: {
      true: ""
    },
    block: {
      true: {
        base: "flex justify-center w-full"
      }
    }
  },
  compoundVariants: [
    // square variants
    { size: "xs", square: true, class: { base: "p-1" } },
    { size: "sm", square: true, class: { base: "p-1.5" } },
    { size: "md", square: true, class: { base: "p-1.5" } },
    { size: "lg", square: true, class: { base: "p-2" } },
    { size: "xl", square: true, class: { base: "p-2" } },

    // loading state
    { loading: true, class: { leadingIcon: "animate-spin" } }
  ],
  defaultVariants: {
    size: "md",
    variant: "primary"
  }
});
