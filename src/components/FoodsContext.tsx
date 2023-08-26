import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

export type TDirection = "left" | "right";

interface IFood {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface IFoodsContext {
  all: IFood[];
  currentIdx: number;
  absoluteIdx: number;
  direction: TDirection;
  theme: string;
  previous: () => void;
  next: () => void;
  moveToIdx: (idx: number) => void;
}

const FoodsContext = createContext<IFoodsContext | null>(null);

export default function FoodsProvider({ children }: PropsWithChildren) {
  const [foods, setFoods] = useState<IFood[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [absoluteIdx, setAbsoluteIdx] = useState(0);
  const [direction, setDirection] = useState<TDirection>("right");
  const theme = absoluteIdx % 2 === 0 ? "theme-orange" : "theme-green";

  useEffect(() => {
    // This one isn't a perfect fetching but can do it for a simple one
    async function fetchFoods() {
      const data = await fetch("src/data.json");
      const { foods }: { foods: IFood[] } = await data.json();
      setFoods(foods);
    }
    fetchFoods();
  }, []);

  function previous() {
    const newIdx = currentIdx === 0 ? foods.length - 1 : currentIdx - 1;
    setCurrentIdx(newIdx);
    setAbsoluteIdx(absoluteIdx - 1);
    setDirection("left");
  }

  function next() {
    const newIdx = currentIdx === foods.length - 1 ? 0 : currentIdx + 1;
    setCurrentIdx(newIdx);
    setAbsoluteIdx(absoluteIdx + 1);
    setDirection("right");
  }

  function moveToIdx(idx: number) {
    const offsets: { [key: number]: number } = {};
    for (let i = -2; i <= 2; i++) {
      const diff = currentIdx + i;
      const key = diff < 0 ? diff + foods.length : diff % foods.length;
      offsets[key] = i;
    }
    setCurrentIdx(idx);
    setAbsoluteIdx(absoluteIdx + offsets[idx]);
    setDirection(offsets[idx] < 0 ? "left" : "right");
  }

  const foodsContext = {
    all: foods,
    currentIdx,
    absoluteIdx,
    direction,
    theme,
    previous,
    next,
    moveToIdx,
  };

  return <FoodsContext.Provider value={foodsContext}>{children}</FoodsContext.Provider>;
}

export function useFoods() {
  const foods = useContext(FoodsContext);
  if (foods === null) {
    throw new Error("Children must me a child of FoodsProvider");
  }
  return foods;
}
