import './App.css'
import { Outlet } from 'react-router'
import Header from './components/header/Header'
import { useBasketFunc } from './hooks/basketFunc'

function App() {

  const {total, addItem, basket} = useBasketFunc();

  return (
    <>
      <Header total={total}/>
      <Outlet context={addItem}/>
    </>
  )
}

export default App
