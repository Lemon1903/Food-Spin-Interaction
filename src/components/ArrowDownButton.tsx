import { ReactComponent as ArrowDown } from "../assets/arrow.svg";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  theme: string;
}

export default function ArrowDownButton({ theme, ...props }: IButtonProps) {
  return (
    <button className={`${theme} h-10 w-10 rounded-full bg-theme shadow-lg transition-all hover:scale-110`} {...props}>
      <ArrowDown className="m-auto" />
    </button>
  );
}
