import './App.css'
import { Outlet } from 'react-router'
import Header from './components/header/Header'
import { useBasketFunc } from './hooks/basketFunc'

function App() {

  const {total, addItem, basket, removeItem} = useBasketFunc();

  return (
    <>
      <Header total={total}/>
      <Outlet context={{addItem, basket, removeItem}}/>
    </>
  )
}

export default App
