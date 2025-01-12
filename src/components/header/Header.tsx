import { smoothScroll } from '../../utils/smoothScroll'
import s from './Header.module.css'

export default function Header() {

  return (
    <div className={s.main}>
        <h4>Portfolio</h4>
        <ul>
            <li onClick={() => smoothScroll('hello')}>
                Приветствие
            </li>
            <li onClick={() => smoothScroll('skills')}>
                Навыки
            </li>
            <li onClick={() => smoothScroll('experince')}>
                Опыт
            </li>
            <li onClick={() => smoothScroll('education')}>
                Образование
            </li>
            <li  onClick={() => smoothScroll('portfolio')}>
                Портфолио
            </li>
            <li onClick={() => smoothScroll('contacts')}>
                Контакты
            </li>
        </ul>
    </div>
  )
}
