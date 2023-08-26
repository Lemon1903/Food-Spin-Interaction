import { AnimatePresence, motion } from "framer-motion";
import ArrowDownButton from "./ArrowDownButton";
import FoodCarousel from "./FoodCarousel";
import { useFoods } from "./FoodsContext";
import { centerImgAnimation } from "./animations";

export default function FoodSpinCarousel() {
  const foods = useFoods();
  const food = foods.all[foods.currentIdx];

  return (
    <div
      className={`${foods.theme} bg-theme/30 absolute bottom-[33vh] left-72 aspect-square w-[1177px] rounded-full transition-colors`}
    >
      <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 -translate-y-[53%]">
        <FoodCarousel />
        {/* Center image and buttons */}
        <div className="absolute inset-y-0 my-auto flex h-1/2 w-full items-center justify-between">
          <ArrowDownButton theme={foods.theme} onClick={foods.next} />
          {food && (
            <AnimatePresence mode="popLayout">
              <motion.img
                key={food.id}
                src={food.image}
                alt={food.name}
                className="h-[280px] w-[280px] select-none rounded-full shadow-2xl"
                {...centerImgAnimation(foods.direction)}
              />
            </AnimatePresence>
          )}
          <ArrowDownButton theme={foods.theme} onClick={foods.previous} />
        </div>
      </div>
    </div>
  );
}
