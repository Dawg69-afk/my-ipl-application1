import { cva } from "class-variance-authority";

const buttonvariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-orange-600 text-black hover:bg-blue-300 shadow",
        outline: "bg-gray-600 text-white hover:bg-red-300 shadow",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariant: {
      variant: "primary",
      size: "default",
    },
  }
);
const Button = ({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${buttonvariants({ variant, size })}, ${className}`} //not inverted comma, its a backtick(key below esc)
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
