import React, {useState, useEffect} from 'react';
import './App.sass';
import CardContainer from './components/CardContainer';
import Nav from './components/Nav';
import PostContainer from './components/PostContainer';
import UserContainer from './components/UserContainer';
import {Context} from './context'

function App() {

    const [cards, _setCards] = useState([]);
    const setCards = (func) => {
      _setCards(pre => {
        const newState = func(pre)
        localStorage.setItem('cards', JSON.stringify(newState));
        return newState
      })
    }

    useEffect(() => {
      const cards = JSON.parse(localStorage.getItem('cards')) ?? []
      _setCards(cards);
    }, [])
    
    const changeCardState = (id) => {
      setCards( prev => {
        const newState = prev.map(word =>{
          if(word.id === id){
            word.state = word.state === 'ru' ? 'en' : 'ru'
        }
        return word
      })
      localStorage.setItem('cards', JSON.stringify(newState));

      return newState
    }
    )
  }

  const changeLanguage = (langeuage)=>{
    setCards(prev => prev.map(card=>{
        card.state = langeuage
        return card
        })
      )
    }

    const addCard = (card) =>{
      setCards(prev => [...prev, card])
    }

    const deleteCard = (id) => {
      setCards(prev => prev.filter(card => card.id !== id))
    }
    return ( 
    <>
      <Context.Provider value={{changeLanguage, changeCardState, addCard, deleteCard}}>
        <div className ="App">
        <Nav/>
        <CardContainer cards={cards}/>
        </div>
      </Context.Provider>
      <UserContainer />
      <PostContainer />

    </>
    );
  }

  export default App;