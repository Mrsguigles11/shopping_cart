import App from "./App";
import { Home } from "./components/home/Home";
import { Shop } from "./components/shop/Shop";
import { Basket } from "./components/basket/Basket";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "basket", element: <Basket /> },
    ],
  },
];

export default routes;
