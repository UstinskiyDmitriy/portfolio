import s from './ExperienceCard.module.css'

interface ExperienceCardProps {
    title: string;
    company: string;
    dateFrom: string | number;
    dateTo: string | number
    description: string
}
export default function ExperienceCard({title, company, dateFrom, dateTo, description}:ExperienceCardProps) {
  return (
    <div className={s.main}>
        <div className={s.title_wrapper}><h3>{title}</h3><span className={s.accent_span}>{company}</span></div>
        <p>{dateFrom} - {dateTo}</p>
        <p>{description}</p>
    </div>
  )
}
