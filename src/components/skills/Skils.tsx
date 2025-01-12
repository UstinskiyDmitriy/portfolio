import s from './Skills.module.css'
import Card from '../card/Card'

export default function Skills() {
  return (
    <div className={s.main}>
        <div className={s.title_card_wrapper}>
            <Card title='Скилы' description='Скромный набор умений, который хочется развивать в кругу профессионалов' fontSize={30}/>
        </div>
        <div className={s.cards_wrapper}>
            <div><Card title='Frontend Разработка' description='HTML, CSS, JavaScript, TypeScript, Node.js, React, Ionic' fontSize={26}/></div>
            <div><Card title='Web Разработка' description='GitHub, VSCode, Vite, WebPack' fontSize={26}/></div>
            <div><Card title='BackEnd' description='Хотелось бы добавить такой пункт в своё резюме' fontSize={26}/></div>
            <div><Card title='UI/UX' description='И над этим скилом не плохо было бы поработать' fontSize={26}/></div>
        </div>
    </div>
  )
}
