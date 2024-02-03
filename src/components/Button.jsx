import { cva } from "class-variance-authority";
import clsx from "clsx";

export const buttonVariants = cva(
  "inline-block text-center rounded active:scale-105 transition duration-300 ease-in-out font-medium",
  {
    variants: {
      colors: {
        primary: "bg-cyan brightness-90 dark:brightness-100",
        transparent:
          "bg-transparent hover:bg-black/10 border-cyan border-[1px]",
      },
      size: {
        default: "py-2 px-6",
        full: "py-2 w-full",
        small: "py-1 px-4",
      },
    },
    defaultVariants: {
      colors: "primary",
      size: "default",
    },
  }
);

const Button = ({ onClick, colors, size, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(buttonVariants({ colors, size, className }))}
    >
      {children}
    </button>
  );
};

export default Button;
