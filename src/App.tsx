import FoodInformation from "./components/FoodInformation";
import FoodSpinCarousel from "./components/FoodSpinCarousel";
import FoodsProvider from "./components/FoodsContext";
import Header from "./components/Header";

export default function App() {
  return (
    <FoodsProvider>
      <div className="container relative flex flex-col 2xl:max-h-[790px]">
        <Header />
        <main className="flex flex-1 items-center pb-16 pt-80 max-lg:flex-col md:pt-[520px] lg:p-0">
          <FoodInformation />
          <FoodSpinCarousel />
        </main>
      </div>
    </FoodsProvider>
  );
}
