"use client";

import { icons } from "lucide-react";

const Icon = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon color={color} size={size} />;
};

export default Icon;