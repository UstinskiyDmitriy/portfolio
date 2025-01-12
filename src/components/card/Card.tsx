import s from './Card.module.css'

interface CardProps {
    title: string;
    description?: string;
    fontSize?: number;
}

export default function Card({title,description, fontSize}:CardProps) {
  return (
    <div className={s.main}>
        <h2 style={{fontSize:`${fontSize}px`}}>{title}<span className={s.dot}>.</span></h2>
        <p>{description}</p>
    </div>
  )
}
