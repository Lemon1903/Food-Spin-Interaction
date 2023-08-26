import FoodInformation from "./components/FoodInformation";
import FoodSpinCarousel from "./components/FoodSpinCarousel";
import FoodsProvider from "./components/FoodsContext";
import Header from "./components/Header";

export default function App() {
  return (
    <FoodsProvider>
      <div className="container relative flex flex-col">
        <Header />
        <main className="flex flex-1 items-center max-lg:flex-col">
          <FoodInformation />
          <FoodSpinCarousel />
        </main>
      </div>
    </FoodsProvider>
  );
}
