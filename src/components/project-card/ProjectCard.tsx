import s from './ProjectCard.module.css'

interface ProjectCardProps {
    image: string;
    title: string;
    date: string;
    id: string | number;
    site: string | undefined;
}
export default function ProjectCard({image,title, date, id, site}:ProjectCardProps) {
  return (
    <div className={s.main} id={id}>
      <div>
        
      </div>
        <a href={site} target='_blank'><img src={image} alt={title} className={s.image}/></a>
        <div className={s.description_wrapper}>
        <h3>{title}</h3>
        <p>{date}</p>

        </div>
    </div>
  )
}
