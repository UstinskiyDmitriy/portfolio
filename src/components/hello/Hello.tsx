
import { useState } from 'react';
import { USER } from '../../const/user/user'
import s from './Hello.module.css'
import Modal from '../modal/Modal';
import ContactForm from '../contacts/contacts_form/ContactsForm';

export default function Hello() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className={s.main}>
        <div className={s.about_wrapper}>
            <h1 className={s.main_title}>Я Дмитрий Устинский</h1>
            <p>Я Web Разработчик, живущий в России. На данный момент нахожусь в поиске работы в качестве младшего разработчика для развития собственных навыков и помощи в развитии вашего продукта.</p>
            <table>
                <tbody>
                <tr>
                    <td>Телефон</td>
                    <td>{USER.phone}</td>
                </tr>
                <tr>
                    <td>Почта</td>
                    <td>{USER.email}</td>
                </tr>
                <tr>
                    <td>Адрес</td>
                    <td>{USER.adress}</td>
                </tr>
                <tr>
                    <td>Соц. сети</td>
                    <td style={{display:'flex', gap:'10px', alignItems:'center'}}>{USER.social.map((img) => 
                    <a href={img.ref} key={img.id} target='_blank'><img src={img.image} style={{width:'22px', cursor:'pointer'}}/></a> 
                    )}</td>
                </tr>
                </tbody>
               
            </table>

            <div className={s.button_wrapper}>
                <button className={`${s.button} ${s.contact_button}`} onClick={handleOpen}>Связаться со мной</button>
                <button className={`${s.button} ${s.load_button}`}>Скачать CV</button>
            </div>
        </div>

        <div className={s.photo_wrapper}>
            <img className={s.photo} src="/photo.jpg" alt="Аватарка" />
        </div>
        <Modal open={open} handleClose={handleClose} children={<ContactForm />} title='Напишите мне!😉'/>
    </div>
  )
}
