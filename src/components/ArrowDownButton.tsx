import { ReactComponent as ArrowDown } from "../assets/arrow.svg";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  theme: string;
}

export default function ArrowDownButton({ theme, ...props }: IButtonProps) {
  return (
    <button
      className={`${theme} bg-theme h-10 w-10 self-end rounded-full shadow-lg transition-all hover:scale-110`}
      {...props}
    >
      <ArrowDown className="m-auto" />
    </button>
  );
}
