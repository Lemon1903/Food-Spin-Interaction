import { useFoods } from "./FoodsContext";

export default function FoodCarousel() {
  const foods = useFoods();
  const angle = 360 / foods.all.length;

  function calculateClipPath() {
    const bgWidth = "calc(100% / 0.4757)";
    const center = `calc((${bgWidth} / 2) - 50%)`;
    const offset = `calc(${bgWidth} * 0.015)`;

    return {
      clipPath: `circle(calc(${bgWidth} / 2) at 50% calc((${center} - ${offset}) * -1)`,
    };
  }

  return (
    <div className="h-full w-full" style={calculateClipPath()}>
      <div className="transition-all duration-700" style={{ rotate: `${foods.absoluteIdx * -angle}deg` }}>
        {/* Dashed Circle */}
        <svg viewBox="0 0 560 560" className="fill-transparent stroke-primary stroke-2">
          <circle cx="280" cy="280" r="278" strokeDasharray="10, 20" />
        </svg>
        {/* Images around the circle */}
        {foods.all.map((food, idx) => (
          <div
            key={idx}
            className="absolute left-1/2 top-0 h-1/2 origin-bottom -translate-x-1/2 rotate-[--img-angle] focus:bg-primary"
            style={{ "--img-angle": `${idx * angle}deg` } as React.CSSProperties}
          >
            <img
              src={food.image}
              alt={food.name}
              className="mx-auto w-[34%] -translate-y-1/2 cursor-pointer select-none rounded-full shadow-2xl transition-all hover:scale-110"
              onClick={() => foods.moveToIdx(idx)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
