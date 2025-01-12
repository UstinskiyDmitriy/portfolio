import Contacts from "../../components/contacts/Contacts";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import Header from "../../components/header/Header";
import Hello from "../../components/hello/Hello";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skils";
import s from './MainPage.module.css'
export default function MainPage() {
  return (
    <div className={s.main}>
      <Header />
      <section id="hello" className={s.hello}>
      <Hello />
      </section>

      <section id="skills" className={s.skills}>
        <Skills />
      </section>

      <section id="experince" className={s.experience}>
      <Experience />
      </section>

      <section id="education" className={s.education}>
      <Education />
      </section>

      <section id="portfolio" className={s.portfolio}>
        <Portfolio />
      </section>

      <section id="contacts" className={s.contacts}>
        <Contacts />
      </section>
    </div>
  )
}
