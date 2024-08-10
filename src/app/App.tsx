import "./styles/index.scss";

import { Link } from "react-router-dom"
import { AppRouter } from "./providers/AppRouter"
import { Header } from "widgets/Header"

export const App = () => {
  return (
    <div className="app dark blue">
      <Header />
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