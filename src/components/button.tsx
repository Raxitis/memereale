// components/ui/Button.tsx
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition";
  const variants = {
    primary: "bg-white text-black shadow hover:opacity-90",
    outline: "backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:text-white hover:bg-white/20",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
