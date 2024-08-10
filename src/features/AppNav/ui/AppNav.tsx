import { Link } from "react-router-dom";

interface AppNavProps {
  className?: string;
}

export const AppNav = ({ className }: AppNavProps) => {
  return (
    <ul className={className}>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/about">О нас</Link>
      </li>
    </ul>
  );
};
