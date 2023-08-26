import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="z-10 flex items-center gap-44 py-12">
      <Logo />
      <nav className="flex-1">
        <ul className="flex gap-14 text-link">
          {["Breakfast", "Lunch", "Dinner"].map((link) => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="relative">
        <Cart />
        <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary content-['']" />
      </button>
    </header>
  );
}
