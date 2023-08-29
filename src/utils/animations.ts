import { HTMLMotionProps, MotionProps } from "framer-motion";
import { TDirection } from "../components/FoodsContext";

export function centerImgAnimation(direction: TDirection): HTMLMotionProps<"img"> {
  const sign = direction === "left" ? -1 : 1;
  return {
    initial: { scale: 0.5, rotate: 90 * sign, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0.5, rotate: -90 * sign, opacity: 0 },
    transition: { bounce: 0, duration: 0.6 },
  };
}

export function scaleAnimation(origin: string[], scale: number): MotionProps {
  return {
    initial: { transformOrigin: origin[0], scale: scale, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { transformOrigin: origin[1], scale: scale, opacity: 0 },
    transition: { bounce: 0, duration: 0.45, ease: "easeInOut" },
  };
}
