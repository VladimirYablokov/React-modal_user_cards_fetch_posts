import React, {useContext} from 'react'
import Button from '../UI/Button'
import Field from '../UI/Field/Field';
import s from './AddWord.module.sass'
import { Context } from '../../context';

export default function AddWord() {
  const {addCard} = useContext(Context)

    const submit = e =>{
        e.preventDefault();
        const {en, ru} = e.target;
        addCard({
            id: Date.now(),
            en: en.value,
            ru: ru.value,
            state: 'ru'
        });
    }

  return (
    <form className={s.add_form} onSubmit={submit}>
        <Field label={'на Английском'} name={'en'}/>
        <Field label={'на Русском'} name={'ru'}/>
        <Button>Добавить</Button>
    </form>
  )
}
