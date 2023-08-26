import { AnimatePresence, motion } from "framer-motion";
import { useFoods } from "./FoodsContext";
import { scaleAnimation } from "./animations";

export default function FoodInformation() {
  const foods = useFoods();
  const food = foods.all[foods.currentIdx];

  return (
    <div className="relative max-w-sm pr-8">
      {food && (
        <AnimatePresence mode="popLayout">
          <motion.p
            key={`price${food.id}`}
            className={`${foods.theme} text-theme text-price transition-colors`}
            {...scaleAnimation(["top left"], 0.3)}
          >
            ${food.price}
          </motion.p>
          <motion.h1 key={`name${food.id}`} className="text-h1" {...scaleAnimation(["top left"], 0.3)}>
            {food.name}
          </motion.h1>
          <motion.p key={`desc${food.id}`} className="mb-7 mt-3" {...scaleAnimation(["top left"], 0.3)}>
            {food.description}
          </motion.p>
          <button className="relative rounded-full px-10 py-3.5 font-bold text-white transition-transform hover:scale-110">
            ORDER NOW
            <AnimatePresence>
              <motion.div
                key={`button${food.id}`}
                className={`${foods.theme} bg-theme shadow-theme/25 absolute inset-0 -z-10 scale-x-90 rounded-full shadow-xl`}
                {...scaleAnimation([foods.direction, foods.direction === "left" ? "right" : "left"], 0)}
              />
            </AnimatePresence>
          </button>
        </AnimatePresence>
      )}
    </div>
  );
}
