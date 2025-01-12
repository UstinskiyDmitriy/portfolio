import Card from "../card/Card";
import ExperienceCard from "../experience/experience_card/ExperienceCard";
import s from "./Education.module.css";
export default function Education() {
  return (
    <div className={s.main}>
      <div className={s.title_card_wrapper}>
        <Card
          title="Образование"
          description="Обучение чему-то новому в моей жизни не заканичвается"
          fontSize={30}
        />
      </div>
      <div className={s.cards_wrapper}>
      <div className={s.card}>
          <ExperienceCard
            title="Yandex Practicum"
            company="Frontend Developer"
            dateFrom={`12 января 2024`}
            dateTo={`9 декабря 2024`}
            description="Профессиональная переподготовка по программе Frontend Разработчик"
          />
        </div>
        <div className={s.card}>
          <ExperienceCard
            title="Севастопольский Государственный Университет"
            company="Вахтенный помощник капитана"
            dateFrom={`2014 год`}
            dateTo={`2020 год`}
            description="Получил высшее образование в сфере судоходства. Вахтенный помощник капитана дальнего плавания.Инженер - судоводитель"
          />
        </div>
       
      </div>
    </div>
  );
}
