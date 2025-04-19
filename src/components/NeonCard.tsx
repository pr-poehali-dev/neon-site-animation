import { ReactNode } from "react";

type NeonCardProps = {
  children: ReactNode;
  color?: "blue" | "pink" | "purple" | "green" | "yellow";
  className?: string;
  animated?: boolean;
};

const NeonCard = ({ 
  children, 
  color = "blue", 
  className = "",
  animated = false
}: NeonCardProps) => {
  return (
    <div 
      className={`
        neon-border-${color} p-6 backdrop-blur-sm bg-black/40
        ${animated ? "animate-float" : ""} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default NeonCard;
