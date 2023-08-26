import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Menu } from "../assets/menu.svg";

export default function Header() {
  return (
    <header className="z-10 flex items-center justify-between py-12 lg:gap-44">
      <Logo />
      <nav className="lg:flex-1">
        <ul className="hidden gap-14 text-link md:flex">
          {["Breakfast", "Lunch", "Dinner"].map((link) => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-6">
        <Menu className="h-5 w-5 md:hidden" />
        <button className="relative">
          <Cart />
          <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary content-['']" />
        </button>
      </div>
    </header>
  );
}
