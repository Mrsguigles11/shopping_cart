import './App.css'
import { Outlet } from 'react-router'
import Header from './components/header/Header'
import { useShoppingApi } from './data/products'

function App() {

  const {data, error} = useShoppingApi();

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
