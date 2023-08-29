import { useRef, useState } from "react";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Menu } from "../assets/menu.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  document.body.classList.toggle("overflow-hidden", isOpen);

  function toggleNavbar() {
    const newValue = !isOpen;
    if (newValue && navRef.current) navRef.current.focus();
    setIsOpen(newValue);
  }

  return (
    <header className="relative z-10 flex items-center justify-between py-12 lg:gap-44">
      <Logo />
      <nav
        ref={navRef}
        className={`origin-top rounded-md transition-transform max-md:absolute max-md:inset-x-0 max-md:top-3/4 max-md:bg-white max-md:px-5 max-md:shadow-lg md:scale-100 lg:flex-1 ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
        onBlur={() => setIsOpen(false)}
        tabIndex={-1}
      >
        <ul className="grid text-base max-md:divide-y max-md:divide-foreground/40 max-md:text-center md:flex md:gap-14 md:text-link">
          {["Breakfast", "Lunch", "Dinner"].map((link) => (
            <li className="grid max-md:py-5" key={link}>
              <a className="transition-colors hover:text-primary" href="/">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-6">
        <button className="md:hidden" onClick={toggleNavbar}>
          {isOpen ? <Close /> : <Menu />}
        </button>
        <button className="relative transition-transform hover:scale-110">
          <Cart />
          <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary content-['']" />
        </button>
      </div>
    </header>
  );
}
