import { AnimatePresence, motion } from "framer-motion";
import { useFoods } from "./FoodsContext";
import { scaleAnimation } from "./animations";

export default function FoodInformation() {
  const foods = useFoods();
  const food = foods.all[foods.currentIdx];

  return (
    <div className="relative max-w-sm max-lg:text-center lg:pr-8">
      {food && (
        <AnimatePresence mode="popLayout">
          <motion.p
            key={`price${food.id}`}
            className={`${foods.theme} text-price-small text-theme transition-colors md:text-price`}
            {...scaleAnimation(["top left"], 0.3)}
          >
            ${food.price}
          </motion.p>
          <motion.h1 key={`name${food.id}`} className="text-h1-small md:text-h1" {...scaleAnimation(["top left"], 0.3)}>
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
                className={`${foods.theme} absolute inset-0 -z-10 rounded-full bg-theme shadow-xl shadow-theme/25`}
                {...scaleAnimation([foods.direction, foods.direction === "left" ? "right" : "left"], 0)}
              />
            </AnimatePresence>
          </button>
        </AnimatePresence>
      )}
    </div>
  );
}
