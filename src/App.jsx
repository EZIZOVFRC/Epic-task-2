import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const router = createBrowserRouter(ROUTES);

  const [basketItems, setBasketItems] = useState(
    localStorage.getItem("basketItems")
      ? JSON.parse(localStorage.getItem("basketItems"))
      : []
  );

  const addBasket = (item) => {
    const target = basketItems.find((x) => x.item.id == item.id);

    if (target) {
      target.count += 1;
      target.totalPrice += item.price;
      setBasketItems([...basketItems]);
      localStorage.setItem("basketItems", JSON.stringify(basketItems));
    } else {
      const newBasketItems = {
        item: item,
        count: 1,
        totalPrice: item.price,
      };

      setBasketItems([...basketItems, newBasketItems]);
      localStorage.setItem("basketItems", JSON.stringify(basketItems));
    }
  };

  //basketden silmek

  const deleteBasket = (item) => {
    const target = basketItems.find((x) => x.item.id == item.id);
    if (target.count > 1) {
      target.count -= 1;
      totalPrice -= item.price;
      setBasketItems([...basketItems]);
      localStorage.setItem(
        "basketItems",
        JSON.stringify(basketItems.filter((x) => x.item.id != item.id))
      );
    } else {
      setBasketItems([...basketItems.filter((x) => x.item.id != item.id)]);
      localStorage.setItem(
        "basketItems",
        JSON.stringify([...basketItems.filter((x) => (x.item.id = item.id))])
      );
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/")
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const Content = {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    basketItems,
    setBasketItems,
    addBasket,
    deleteBasket,
  };

  return (
    <>
      <MainContext.Provider value={Content}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}

export default App;
