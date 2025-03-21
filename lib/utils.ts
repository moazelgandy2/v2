import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getLineColor = (type: string) => {
  switch (type) {
    case "comment":
      return "text-emerald-400";
    case "import":
      return "text-violet-400";
    case "const":
      return "text-white";
    case "function":
      return "text-yellow-300";
    case "property":
      return "text-sky-300";
    case "value":
      return "text-orange-300";
    default:
      return "text-gray-300";
  }
};
