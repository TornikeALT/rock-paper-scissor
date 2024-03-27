import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Game from "./components/Game";
import Picks from "./components/Picks";
import Rootlayout from "./UI/Rootlayout";
import PicksProvider from "./context/picks-context";


const router = createBrowserRouter([

  {
    path: '/',
    element: <Rootlayout />,
    children: [
      {
        path: '/',
        element: <Game />
      },
      {
        path: '/picks',
        element: <Picks />
      }
    ]
  },

])

function App() {
  return (
    <PicksProvider>
      <RouterProvider router={router} />
    </PicksProvider>
  );
}

export default App;
