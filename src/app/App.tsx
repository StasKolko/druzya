import { Link } from "react-router-dom"
import { AppRouter } from "./providers/AppRouter"

export const App = () => {
  return (
    <div>
      Hi i am stas
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
      </ul>
      <AppRouter />
    </div>
  )
}