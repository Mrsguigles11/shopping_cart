import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useBasketFunc } from "./hooks/basketFunc";

function App() {
  const { total, addItem, basket, removeItem, editQuantity, totalPrice } =
    useBasketFunc();

  return (
    <main>
      <Header total={total} />
      <Outlet
        context={{
          addItem,
          basket,
          removeItem,
          editQuantity,
          totalPrice,
          total,
        }}
      />
      <Footer />
    </main>
  );
}

export default App;
