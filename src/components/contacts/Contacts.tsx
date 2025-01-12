import s from './Contacts.module.css'
import Card from '../card/Card'
import ContactsForm from './contacts_form/ContactsForm'

export default function Contacts() {
  return (
    <div className={s.main}>
        <Card title='Контакты' description='Если вы ищите готового к любым задачам работника, готового учиться, стремящегося к развитию,а так же любителя денег, готового пахать за них, тогда нам по пути!' fontSize={32}/>
        <ContactsForm />
    </div>
  )
}
