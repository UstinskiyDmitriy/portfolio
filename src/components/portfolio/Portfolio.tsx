import s from "./Portfolio.module.css";
import Card from "../card/Card";
import { PROFILE_PROJECTS } from "../../const/profile-projects/profileProjects";
import ProjectCard from "../project-card/ProjectCard";
import { useState } from "react";

interface Project {
  id: number | string;
  website?: string 
}

export default function Portfolio() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);  // Данные выбранного проекта

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className={s.main}>
      <Card title="Портфолио" fontSize={30} />
      <div className={s.cards_wrapper}>
      {PROFILE_PROJECTS.map((el) => (
        <div key={el.id} onClick={() => handleOpen(el)} style={{width:'100%'}}>
           <ProjectCard image={el.image} title={el.title} date={el.date} id={el.id} site={selectedProject?.website}/>
        </div>
       
        ))}
        
      </div>
      </div>
      
   
  );
}
