import { ButtonHTMLAttributes } from "react";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "blue" | "pink" | "purple" | "green" | "yellow";
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};

const NeonButton = ({ 
  children, 
  color = "blue", 
  variant = "outline",
  size = "md",
  className = "", 
  ...props 
}: NeonButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium
    rounded-md transition-all duration-300 ${sizeClasses[size]}
  `;
  
  const variantClasses = variant === "filled" 
    ? `bg-neon-${color}/20 hover:bg-neon-${color}/30 text-neon-${color} neon-border-${color}` 
    : `bg-transparent hover:bg-neon-${color}/10 text-neon-${color} neon-border-${color}`;

  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;
