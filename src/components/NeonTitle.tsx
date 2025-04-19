import { ReactNode } from "react";

type NeonTitleProps = {
  children: ReactNode;
  color?: "blue" | "pink" | "purple" | "green" | "yellow";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
  sm: "text-xl md:text-2xl",
  md: "text-2xl md:text-3xl",
  lg: "text-3xl md:text-4xl",
  xl: "text-4xl md:text-6xl",
};

const NeonTitle = ({ 
  children, 
  color = "blue", 
  className = "", 
  size = "lg" 
}: NeonTitleProps) => {
  return (
    <h1 
      className={`neon-text-${color} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </h1>
  );
};

export default NeonTitle;
