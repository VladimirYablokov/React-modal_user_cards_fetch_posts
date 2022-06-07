import React, { useContext, useState } from 'react'
import AddWord from '../AddWord';
import ModalWindow from '../ModalWindow';
import Button from '../UI/Button';
import s from './Nav.module.sass';
import { Context } from '../../context';

export default function Nav() {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(() => false);

  const {changeLanguage} = useContext(Context)
    
  return (
    <nav className={s.navigation}>
        <Button onClick={()=> setModal(()=>true)}>Добавить</Button>
        <Button onClick={()=>changeLanguage('en')}>Английский</Button>
        <Button onClick={()=>changeLanguage('ru')}>Русский</Button>
        {   modal && 
            <ModalWindow closeModal={closeModal}>
                <AddWord />  
            </ModalWindow>
        }
    </nav>
  )
}
