import * as React from "react";
import styles from "./index.module.css";

type ButtonVariant =
  | "orange"
  | "teal"
  | "lightTeal"
  | "outlineWhite"
  | "outlineTeal"
  | "outlineNavy"
  | "darkNavy"
  | "ghostOrange"
  | "link";

interface CustomButtonProps extends React.PropsWithChildren {
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const getVariantClass = (variant: ButtonVariant = "orange") => {
  const variantMap: Record<ButtonVariant, string> = {
    orange: styles.orange,
    teal: styles.teal,
    lightTeal: styles.lightTeal,
    outlineWhite: styles.outlineWhite,
    outlineTeal: styles.outlineTeal,
    outlineNavy: styles.outlineNavy,
    darkNavy: styles.darkNavy,
    ghostOrange: styles.ghostOrange,
    link: styles.link,
  };
  return variantMap[variant] || variantMap.orange;
};

export default function CustomButton({
  children,
  variant = "orange",
  disabled = false,
  className = "",
  onClick,
}: CustomButtonProps) {
  const baseClasses = styles.Button;
  const variantClass = getVariantClass(variant);
  const combinedClasses = `${baseClasses} ${variantClass} ${className}`.trim();

  return (
    <button className={combinedClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
