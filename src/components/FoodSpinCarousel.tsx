import { AnimatePresence, motion } from "framer-motion";
import ArrowDownButton from "./ArrowDownButton";
import FoodCarousel from "./FoodCarousel";
import { useFoods } from "./FoodsContext";
import { centerImgAnimation } from "./animations";

export default function FoodSpinCarousel() {
  const foods = useFoods();
  const food = foods.all[foods.currentIdx];

  return (
    // Big circle original size: 1177px
    <div
      className={`${foods.theme} absolute left-1/2 aspect-square w-[565px] rounded-full bg-theme/30 transition-colors max-lg:-top-[500px] max-lg:-translate-x-1/2 max-md:-top-60 md:w-[125%] lg:bottom-[33%] lg:left-[22.5%] lg:w-[92%]`}
    >
      <div className="absolute left-1/2 top-full w-[47.6%] -translate-x-1/2 -translate-y-[53%]">
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
                className="aspect-square h-full select-none rounded-full shadow-2xl"
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
