import Card from '../card/Card'
import s from './Experience.module.css'
import ExperienceCard from './experience_card/ExperienceCard'
export default function Experience() {
  return (
    <div className={s.main}>
        <div className={s.title_card_wrapper}>
            <Card title='Опыт' description='Опыт работы - чрезвычайно важная составляющая для трудоустройства.Очень хочется попасть в команду которая даст шанс молодому разработчику набраться опыта и делать полезности для вашего дела!' fontSize={30}/>
        </div>
        <div className={s.cards_wrapper}>
            <div className={s.card}><ExperienceCard title='Junior Frontend Dev' company='HoldMyDeer' dateFrom={`14 сентября`} dateTo={`22 декабря`} description='Разработка мультиплатформенного приложения для поиска свободных парковочных мест в Черногории'/></div>
            <div className={s.card}><ExperienceCard title='Junior Frontend Dev' company='Ваша компания' dateFrom={`С сегодняшнего дня`} dateTo={`без даты окончания`} description='Разработка чего-то очень крутого!'/></div>
        </div>
    </div>
  )
}
